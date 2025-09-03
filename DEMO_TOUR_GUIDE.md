# 🌍 Travel Tracker - Demo Tour Guide

Welcome to the Travel Tracker! This interactive web application allows members to track and visualize their travel adventures around the world. Each member gets their own color, and visited countries are highlighted on an interactive world map.

## 🎯 Project Overview

**Tech Stack:**
- **Backend:** Node.js with Express.js
- **Database:** PostgreSQL (hosted on Neon)
- **Frontend:** EJS templates with vanilla JavaScript
- **Styling:** CSS with interactive world map (SVG)

**Key Features:**
- Multi-user support with personalized colors
- Interactive world map showing visited countries
- Add/remove countries with fuzzy search
- Real-time visual feedback
- Family-friendly interface

---

## 🚀 Quick Start Demo

### Step 1: Environment Setup
```bash
# Navigate to the project directory
cd "SQL - Postgre/8.5 Family Travel Tracker/Trip-Tracker"

# Install dependencies
npm install

# Create a .env file with your database URL
echo "DATABASE_URL=your_neon_database_url_here" > .env
```

### Step 2: Database Setup
```bash
# Start the application (this will create tables and seed demo data)
npm start
```

### Step 3: Access the Application
Open your browser and navigate to: `http://localhost:3000`

---

## 📊 Database Structure

The application uses three main tables:

```sql
-- Users table for family members
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(15) UNIQUE NOT NULL,
    color VARCHAR(15)
);

-- Countries lookup table
CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    country_code CHAR(2) NOT NULL,
    country_name VARCHAR(100) NOT NULL
);

-- Junction table for visited countries
CREATE TABLE visited_countries(
    id SERIAL PRIMARY KEY,
    country_code CHAR(2) NOT NULL,
    user_id INTEGER REFERENCES users(id)
);
```

---

## 🎨 Demo Features Walkthrough

### 1. **User Management**
- **Switch Users:** Click on family member buttons to switch between users
- **Add New User:** Click "Add new person" to create a new family member
- **Color Coding:** Each user has a unique color for visual tracking

### 2. **Country Tracking**
- **Add Countries:** Type a country name in the input field and click "Add"
- **Fuzzy Search:** The system supports partial matches (e.g., "US" finds "United States")
- **Visual Feedback:** Countries appear on the map in the user's color immediately

### 3. **Interactive Map**
- **Hover Effects:** Hover over countries to see their names
- **Color Coding:** Each visited country shows the color of the user who visited it
- **World Coverage:** SVG-based map with all countries represented

---

## ⚡ Demo Constraints & Optimizations

### **Top 50 Most Important Countries Only** 🌟

**Due to Neon database free tier limitations (50 entries max)**, this demo version includes only the **50 most important and commonly visited countries** worldwide. This ensures:

- ✅ Faster loading times
- ✅ Optimal database performance
- ✅ Most relevant countries for travel tracking
- ✅ Real-world usage scenarios
- ✅ Covers major tourist destinations and business hubs

**Included Countries (Most Popular Destinations):**

**🌎 Major Global Powers:**
1. **United States** 🇺🇸 - World's largest economy, diverse destinations
2. **United Kingdom** 🇬🇧 - London, Edinburgh, historic landmarks
3. **France** 🇫🇷 - Paris, Eiffel Tower, wine regions
4. **Germany** 🇩🇪 - Berlin, Munich, Oktoberfest
5. **Italy** 🇮🇹 - Rome, Venice, Florence, pizza & pasta
6. **Spain** 🇪🇸 - Barcelona, Madrid, beaches & festivals
7. **Canada** 🇨🇦 - Toronto, Vancouver, Niagara Falls
8. **Australia** 🇦🇺 - Sydney Opera House, Great Barrier Reef

**🌏 Asian Tigers:**
9. **Japan** 🇯🇵 - Tokyo, Kyoto, cherry blossoms, technology
10. **China** 🇨🇳 - Beijing, Great Wall, Shanghai
11. **India** 🇮🇳 - Taj Mahal, Himalayas, Bollywood
12. **Thailand** 🇹🇭 - Bangkok, islands, temples, street food
13. **Vietnam** 🇻🇳 - Hanoi, Ho Chi Minh City, Halong Bay
14. **Indonesia** 🇮🇩 - Bali, Jakarta, volcanoes
15. **Malaysia** 🇲🇾 - Kuala Lumpur, Penang, rainforests
16. **Singapore** 🇸🇬 - Marina Bay, Gardens by the Bay
17. **South Korea** 🇰🇷 - Seoul, K-pop, palaces, technology
18. **Philippines** 🇵🇭 - Manila, Cebu, beautiful beaches

**🌍 European Classics:**
19. **Turkey** 🇹🇷 - Istanbul, Cappadocia, Mediterranean coast
20. **Greece** 🇬🇷 - Athens, islands, ancient ruins
21. **Netherlands** 🇳🇱 - Amsterdam, windmills, tulips
22. **Belgium** 🇧🇪 - Brussels, chocolate, waffles
23. **Switzerland** 🇨🇭 - Alps, Zurich, Geneva, chocolate
24. **Austria** 🇦🇹 - Vienna, Salzburg, classical music
25. **Portugal** 🇵🇹 - Lisbon, Porto, Algarve beaches
26. **Ireland** 🇮🇪 - Dublin, Guinness, green landscapes

**🌐 Nordic & Eastern Europe:**
27. **Sweden** 🇸🇪 - Stockholm, IKEA, Northern Lights
28. **Norway** 🇳🇴 - Oslo, fjords, Northern Lights
29. **Denmark** 🇩🇰 - Copenhagen, Little Mermaid
30. **Finland** 🇫🇮 - Helsinki, Lapland, saunas
31. **Poland** 🇵🇱 - Warsaw, Krakow, historic cities
32. **Czech Republic** 🇨🇿 - Prague, castles, beer culture
33. **Hungary** 🇭🇺 - Budapest, thermal baths
34. **Croatia** 🇭🇷 - Dubrovnik, Plitvice Lakes

**🌎 Americas:**
35. **Brazil** 🇧🇷 - Rio, Carnival, Amazon
36. **Mexico** 🇲🇽 - Cancun, Mexico City, Mayan ruins
37. **Argentina** 🇦🇷 - Buenos Aires, Patagonia, wine
38. **Chile** 🇨🇱 - Santiago, Patagonia, wine regions
39. **Peru** 🇵🇪 - Machu Picchu, Cusco, Andes
40. **Colombia** 🇨🇴 - Medellin, Cartagena, coffee region

**🌍 Middle East & Africa:**
41. **Morocco** 🇲🇦 - Marrakech, Sahara Desert, souks
42. **Egypt** 🇪🇬 - Pyramids, Nile River, Red Sea
43. **South Africa** 🇿🇦 - Cape Town, safari, wine lands
44. **Kenya** 🇰🇪 - Nairobi, Maasai Mara safari
45. **Tanzania** 🇹🇿 - Zanzibar, Mount Kilimanjaro, safari
46. **United Arab Emirates** 🇦🇪 - Dubai, Abu Dhabi, luxury
47. **Israel** 🇮🇱 - Jerusalem, Tel Aviv, Dead Sea
48. **Jordan** 🇯🇴 - Petra, Wadi Rum, Red Sea
49. **Saudi Arabia** 🇸🇦 - Mecca, Medina, Red Sea coast
50. **Russia** 🇷🇺 - Moscow, St. Petersburg, Trans-Siberian

---

## 🛠️ API Endpoints

The application exposes several RESTful endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Main dashboard with map and user selection |
| POST | `/add` | Add a country to current user's visited list |
| POST | `/user` | Switch current user or create new user |
| POST | `/new` | Create a new family member |
| GET | `/deleteall` | Clear all visited countries (admin function) |

---

## 🎮 Demo Scenarios

### **Scenario 1: Family Vacation Planning**
1. Create family members (Mom, Dad, Kids)
2. Each person adds countries they've visited
3. See the colorful world map evolve
4. Plan future trips based on unvisited countries

### **Scenario 2: Travel Competition**
1. Set up multiple users
2. Challenge family members to add countries
3. Track progress with color-coded achievements
4. Create friendly competition

### **Scenario 3: Educational Tool**
1. Use for geography lessons
2. Teach about different countries
3. Visual learning with interactive map
4. Family bonding through shared experiences

---

## 🔧 Customization Options

### **Adding More Countries**
To expand beyond the 50-country demo limit:

1. **Modify seed.sql** - Add more countries to the database
2. **Update Map Data** - Ensure SVG paths exist for new countries
3. **Performance Testing** - Monitor loading times with larger datasets

### **Styling Customization**
- Modify `public/styles/main.css` for visual changes
- Update color schemes in the user creation form
- Customize the world map appearance

### **Feature Extensions**
- Add country visit dates
- Include travel photos
- Create travel statistics
- Add social sharing features

---

## 🚨 Troubleshooting

### **Common Issues:**

**Database Connection Error:**
```bash
# Check your .env file
cat .env
# Ensure DATABASE_URL is correctly set
```

**Port Already in Use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or change port in index.js
```

**Country Not Found:**
- Check spelling against the seeded countries list
- Use partial names (e.g., "United States" → "US")
- Only countries in the first 50 alphabetical list are available

---

## 📈 Learning Objectives

This project demonstrates:
- ✅ Full-stack web development (Node.js + Express + PostgreSQL)
- ✅ Database design and relationships
- ✅ User authentication and session management
- ✅ Interactive SVG manipulation
- ✅ RESTful API design
- ✅ EJS templating
- ✅ Environment configuration
- ✅ Deployment considerations

---

## 🎯 Next Steps

1. **Complete the Full Course:** Continue with Angela Yu's Web Development course
2. **Expand the Application:** Add more features like travel dates, photos, reviews
3. **Deploy Online:** Host on platforms like Heroku, Vercel, or Railway
4. **Mobile App:** Create a companion mobile application
5. **Advanced Features:** Add travel statistics, recommendations, social features

---

## 📞 Support

If you encounter issues:
1. Check the console for error messages
2. Verify database connection
3. Ensure all dependencies are installed
4. Review the demo constraints (first 50 countries only)

**Happy Traveling! ✈️🌍**

---

*This demo is part of Angela Yu's Complete Web Development Bootcamp course materials.*
