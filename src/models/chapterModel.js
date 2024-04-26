const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    chapter_id: { type: String },
    book_id: { type: String },
    title: { type: String },
    number: { type: String },
    hadis_range: { type: String },
    book_name: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const ChapterModel = mongoose.model("chapters", DataSchema);
module.exports = ChapterModel;
