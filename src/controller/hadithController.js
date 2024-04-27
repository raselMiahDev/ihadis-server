const Hadith = require("../models/hadithModel");

const getAllHadith = async (req, res) => {
  try {
    const data = await Hadith.aggregate([
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
      {
        $lookup: {
          from: "sections",
          localField: "section_id",
          foreignField: "_id",
          as: "section",
        },
      },
      {
        $unwind: "$section",
      },
    ]);

    res.status(200).json({ status: true, data: data });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

module.exports = {
  getAllHadith,
};
