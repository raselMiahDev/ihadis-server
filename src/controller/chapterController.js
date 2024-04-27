const Chapter = require("../models/chapterModel");

const getAllChapter = async (req, res) => {
  try {
    const data = await Chapter.aggregate([
      {
        $lookup: {
          from: "books",
          localField: "book_id",
          foreignField: "_id",
          as: "book",
        },
      },
      {
        $unwind: "$book",
      },
    ]);
    res.status(200).json({ status: true, data: data });
  } catch (error) {
    res.status(200).json({ status: false, error: error });
  }
};

module.exports = {
  getAllChapter,
};
