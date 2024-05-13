const express = require("express");
const User = require("../db/userModel");
const router = express.Router();
const dbLoad = require("../db/dbLoad"); 

router.post("/", async (request, response) => {
  try {
    const userData = dbLoad.getUserData(); 
    const newUser = new User(userData); 
    const savedUser = await newUser.save(); 
    response.status(201).json(savedUser);
  } catch (error) {
    response.status(500).json({ message: "Failed to create user" });
  }
});

router.get("/", async (request, response) => {
  try {
    const users = await User.find(); 
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ message: "Failed to fetch users" });
  }
});

module.exports = router;