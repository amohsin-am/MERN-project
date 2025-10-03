# 🚀 MERN User Management System

A full-stack MERN (MongoDB, Express, React, Node.js) web application that allows users to submit and view user data (name, age, car, favorite color). It demonstrates front-end and back-end integration, React hooks, and MongoDB Atlas for data persistence.

---

## 🚀 Features

- Add new users with details (name, age, car, color)
- Fetch and display all users from the MongoDB database
- Real-time updates without reloading the page
- Simple and clean React-based UI
- Built using modern JavaScript with functional components and hooks

---

## 💼 Technologies Used

| Frontend  | Backend | Database   |
|-----------|---------|------------|
| React     | Node.js | MongoDB    |
| HTML5     | Express | MongoDB Atlas |
| CSS3      | CORS    | Mongoose   |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repo

```bash
git clone https://github.com/amohsin-am/MERN-project.git
cd MERN-project
2. Install Server Dependencies
cd server
npm install

3. Install Client Dependencies
cd ../client
npm install

▶️ Running the App
Start the Backend Server
cd server
node server.js


Make sure MongoDB connection string in server.js is correctly set.

Start the React Frontend

In a new terminal:

cd client
npm start


The React app will run on http://localhost:3000 and backend on http://localhost:8000.

🛡️ Security Notice

🔒 Your MongoDB password has been removed for security. Always use environment variables like:

const mongo_url = process.env.MONGO_URI;


Use .env files and dotenv package for secret management.

🙌 Contribution

Abhay
ChatGPT
Google
Gemini

📜 License

This project is open-source and free to use under the MIT License.
