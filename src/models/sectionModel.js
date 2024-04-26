const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    book_id: { type: String },
    book_name: { type: String },
    chapter_id: { type: String },
    section_id: { type: String },
    title: { type: String },
    preface: { type: String },
    number: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const SectionModel = mongoose.model("sections", DataSchema);
module.exports = SectionModel;
