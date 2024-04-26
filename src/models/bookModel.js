const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    title_ar: { type: String },
    number_of_hadis: { type: String },
    abvr_code: { type: String },
    book_name: { type: String },
    book_descr: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const BookModel = mongoose.model("books", DataSchema);
module.exports = BookModel;
