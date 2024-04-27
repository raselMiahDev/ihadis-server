const Book = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).json({ status: true, data: data });
  } catch (error) {
    res.status(200).json({ status: false, error: error });
  }
};

module.exports = {
  getAllBooks,
};
