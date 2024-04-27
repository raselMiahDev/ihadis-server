const Section = require("../models/sectionModel");

const getAllSection = async (req, res) => {
  try {
    const data = await Section.aggregate([
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
      {
        $lookup: {
          from: "chapters",
          localField: "chapter_id",
          foreignField: "_id",
          as: "chapter",
        },
      },
      {
        $unwind: "$chapter",
      },
    ]);

    res.status(200).json({ status: true, data: data });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

module.exports = {
  getAllSection,
};
