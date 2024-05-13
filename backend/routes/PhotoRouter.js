const express = require("express");
const Photo = require("../db/photoModel");
const { dbLoad } = require("../db/dbLoad");
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    await dbLoad();
    res.status(200).json({ message: "Data loaded and new record added" });
  } catch (error) {
    res.status(500).json({ message: "Failed to load data" });
  }
});


router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find();

    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch photos" });
  }
});

module.exports = router;