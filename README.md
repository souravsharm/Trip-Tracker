# 🌍 Family Travel Tracker

**A beautiful web application for tracking family travel adventures around the world!**

[![Web App](https://img.shields.io/badge/Web%20App-Live-brightgreen)](https://trip-tracker-rydl.onrender.com/)

---

## 📖 About This Project

The Family Travel Tracker is an interactive web application that allows family members to track and visualize their travel adventures. Each family member gets their own color, and visited countries are highlighted on an interactive world map.

### 🎯 Key Features

- **Multi-user support** with personalized colors
- **Interactive world map** showing visited countries
- **Real-time visual feedback** with color-coded countries
- **Easy country addition** with fuzzy search
- **Family-friendly interface** perfect for all ages

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18.x recommended)
- PostgreSQL database (or Neon database for hosting)

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd "SQL - Postgre/8.5 Family Travel Tracker/Trip-Tracker"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file with your database URL:
   ```bash
   echo "DATABASE_URL=your_neon_database_url_here" > .env
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

---

## 📊 Demo Information

### ⚠️ Important Demo Constraints

**Due to Neon database free tier limitations (50 entries maximum)**, this demo version includes only the **50 most important and commonly visited countries** worldwide.

**Why this limitation?**
- ✅ Faster loading times
- ✅ Optimal database performance
- ✅ Most relevant countries for real-world usage
- ✅ Covers major tourist destinations and business hubs

**What's included:**
- Major global powers (US, UK, France, Germany, etc.)
- Popular Asian destinations (Japan, Thailand, Singapore, etc.)
- European classics (Italy, Spain, Netherlands, etc.)
- Emerging markets (Brazil, Mexico, India, etc.)
- Middle East hotspots (UAE, Israel, Turkey, etc.)

**Not included:** Smaller nations, islands, and territories that receive fewer visitors.

---

## 📚 Detailed Documentation

For comprehensive information about this project, including:

- Complete feature walkthrough
- API endpoint documentation
- Database schema details
- Troubleshooting guide
- Learning objectives

Please see: **[📖 DEMO_TOUR_GUIDE.md](./DEMO_TOUR_GUIDE.md)**

---

## 🛠️ Tech Stack

- **Backend:** Node.js with Express.js
- **Database:** PostgreSQL (hosted on Neon)
- **Frontend:** EJS templates with vanilla JavaScript
- **Styling:** CSS with interactive SVG world map
- **Deployment:** Render.com

---

## 🎮 Usage Scenarios

### Family Travel Planning
- Track where each family member has been
- Plan future trips based on unvisited destinations
- Create family travel goals and achievements

### Educational Tool
- Learn about world geography
- Discover new countries and cultures
- Family bonding through shared experiences

### Travel Competition
- Challenge family members to visit new places
- Track progress with color-coded achievements
- Create friendly competition

---

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Main dashboard with map and user selection |
| POST | `/add` | Add a country to current user's visited list |
| POST | `/user` | Switch current user or create new user |
| POST | `/new` | Create a new family member |
| GET | `/deleteall` | Clear all visited countries (admin function) |

---

## 🤝 Contributing

This is part of Angela Yu's Complete Web Development Bootcamp course materials. Feel free to:

- Report issues
- Suggest improvements
- Submit pull requests
- Share your own modifications

---

## 📄 License

This project is part of educational materials from Angela Yu's Web Development course.

---

## 🙏 Acknowledgments

- **Course Instructor:** Angela Yu
- **Platform:** Udemy - Complete Web Development Bootcamp
- **Database Hosting:** Neon (free tier)
- **Deployment:** Render.com

---

**Happy Traveling! ✈️🌍**

*Track your adventures, create memories, and explore the world together!*
