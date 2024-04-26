const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    book_id: { type: String },
    book_name: { type: String },
    chapter_id: { type: String },
    section_id: { type: String },
    hnarrator: { type: String },
    bn: { type: String },
    ar: { type: String },
    ar_diacless: { type: String },
    note: { type: String },
    grade_id: { type: String },
    grade: { type: String },
    grade_color: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const HadithsModel = mongoose.model("hadiths", DataSchema);
module.exports = HadithsModel;
