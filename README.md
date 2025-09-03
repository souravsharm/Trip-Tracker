# 🌍 Travel Tracker

**A beautiful web application for tracking travel adventures around the world!**

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

### Travel Planning
- Track where each member has been
- Plan future trips based on unvisited destinations
- Create travel goals and achievements

### Educational Tool
- Learn about world geography
- Discover new countries and cultures
- Group bonding through shared experiences

### Travel Competition
- Challenge members to visit new places
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

## 🎯 Interactive Demo Tour

Your application now includes an **interactive demo tour** that guides new users through all the features!

### **Tour Features:**
- **🎯 Smart Onboarding** - Automatically shows for first-time visitors
- **📍 Step-by-Step Guidance** - Highlights each feature with clear instructions
- **🎨 Visual Highlights** - Pulsing animations draw attention to important elements
- **📱 Responsive Design** - Works perfectly on desktop and mobile
- **💾 Remembers Completion** - Won't show again once completed
- **🔄 Restartable** - Blue tour button (🎯) appears after completion for re-visiting

### **Tour Steps:**
1. **👥 Member Selection** - How to switch between users
2. **➕ Add New Person** - Click the "Add new person" button
3. **🌍 Country Addition Form** - Use the form to add countries
4. **🔍 Smart Country Search** - Type country names with fuzzy matching
5. **🚀 Add Country Button** - Submit countries to your list
6. **🗺️ World Map** - View your visited countries
7. **📋 Available Countries List** - See all 50 supported countries
8. **🎯 Complete Dashboard** - Overview of all features

### **For Developers:**
- **Test Tour:** Open `test-tour.html` in your browser
- **Reset Tour:** Clear `familyTravelTourCompleted` from localStorage
- **Customize Steps:** Edit the `steps` array in `public/tour.js`

---

**Happy Traveling! ✈️🌍**

*Track your adventures, create memories, and explore the world together!*

---

**🎯 Pro Tip:** New users will automatically see the interactive tour when they first visit your site!
