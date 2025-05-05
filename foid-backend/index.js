const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const User = require('./models/User');


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// Allow requests from Vite dev server (default: http://localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(cookieParser());  // Enables reading HTTP-only cookies

app.get("/", (req, res) => {
    try {
      res.send("Server is running... 🚀");
    } catch (error) {
      console.log(error);
    }
  });
  
app.post('/api/users', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json({ message: 'User saved', user });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
