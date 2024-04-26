const router = require("express").Router();
const Book = require("../models/bookModel");
const Chapter = require("../models/chapterModel");

router.get("/books", async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).json({ status: true, data: data });
  } catch (error) {
    res.status(200).json({ status: false, error: error });
  }
});

router.get("/chapter", async (req, res) => {
  try {
    const data = await Chapter.find();
    res.status(200).json({ status: true, data: data });
  } catch (error) {
    res.status(200).json({ status: false, error: error });
  }
});

module.exports = router;
