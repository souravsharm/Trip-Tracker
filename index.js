import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config";
import {neon} from "@neondatabase/serverless";

const app = express();
const port = process.env.PORT || 3000;

const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [];

async function getUsers(){
  users = await db.query("SELECT * FROM users");
  if(users.rows.length > 0){
    return users = users.rows;
  }
  return [];
}
function findColor(id){
  const foundUser = users.find(user => user.id == id);
  // console.log("Found user:", foundUser.color); if id =2 color is powderblue
  if (foundUser) {
    return foundUser.color;
  } else {
    console.error(`User with id ${id} not found.`);
    return null; // Or a default color, or throw an error
  }
}
async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries JOIN users ON users.id = user_id WHERE user_id = $1",[currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code.trim());
  });
  return countries;
}
app.get("/", async (req, res) => {
  await getUsers();
  const countries = await checkVisisted();
  res.render("index.ejs", {
    countries: JSON.stringify(countries),
    total: countries.length,
    users: users,
    color: findColor(currentUserId)
  });
});
app.post("/add", async (req, res) => {
  const input = req.body.country;

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    // If no country matches found, show error with available countries list
    if(result.rows.length === 0 ){
      const countries = await checkVisisted(); // Get visited countries for the view
      return res.render("index.ejs", {
        countries: JSON.stringify(countries),
        total: countries.length,
        users: users,
        color: findColor(currentUserId),
        error: `❌ "${input}" not found! Only 50 countries are available due to Neon database free tier limitations. Click "Show Available Countries" to see the complete list.`
      });
    }

    const data = result.rows[0];
    const countryCode = data.country_code;

    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log("Database error:", err);
    // If there's a database error, show a generic error message
    const countries = await checkVisisted();
    return res.render("index.ejs", {
      countries: JSON.stringify(countries),
      total: countries.length,
      users: users,
      color: findColor(currentUserId),
      error: "❌ Database error occurred. Please try again."
    });
  }
});
app.post("/user", async (req, res) => {
  currentUserId = req.body.user;
  if(req.body.add){
    return res.render('new.ejs')
  }
  res.redirect("/");
});

app.post("/new", async (req, res) => {
  
  const newSelectedColor = req.body.color;
  const newUserName = req.body.name;
  users.push({
    id: users.length + 1,
    name: newUserName,
    color: newSelectedColor
  });

  const result = await db.query("INSERT INTO users (name, color) VALUES ($1, $2) RETURNING *", [newUserName, newSelectedColor])
  res.redirect("/");
});
app.get("/deleteall", async (req, res) => {
  await db.query("DELETE FROM visited_countries");
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
