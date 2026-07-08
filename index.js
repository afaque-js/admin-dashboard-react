import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const dbURI =
  "mongodb+srv://shaikhafaque66:As7447675144%40@learning.nmnjlcm.mongodb.net/?appName=Learning";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
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

    if (existingUser.password !== req.body.password) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    res.status(200).json({ message: "Login Successful" });
  } catch (err) {
    res.status(500).json({ error: "Login Failed" + err.message });
  }
});

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
