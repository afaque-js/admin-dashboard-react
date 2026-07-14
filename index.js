import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const password = encodeURIComponent("As7447675144@");

const dbURI = `mongodb+srv://shaikhafaque66:${password}@learning.nmnjlcm.mongodb.net/?appName=Learning`;

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    return next();
  } catch (err) {
    return res
      .status(403)
      .json({ error: "Invalid or expired token" + err.message });
  }
};

app.post("/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Signup Failed" + error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(400).json({ error: "Invalid Email" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      existingUser.password,
    );
    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    if (!validPassword) {
      return res.status(400).json({ error: "Invalid Password" });
    }
    res.status(200).json({ message: "Login Successful", token: token });
  } catch (err) {
    res.status(500).json({ error: "Login Failed: " + err.message });
  }
});

app.get("/profile", authenticateToken, async (req, res) => {
  res.status(200).json({ message: "Welcome to your profile", user: req.user });
});

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
