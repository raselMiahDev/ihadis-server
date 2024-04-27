const { getAllBooks } = require("../controller/bookController");
const { getAllChapter } = require("../controller/chapterController");
const { getAllHadith } = require("../controller/hadithController");
const { getAllSection } = require("../controller/sectionController");

const router = require("express").Router();

// books
router.get("/books", getAllBooks);

// chapter
router.get("/chapter", getAllChapter);

// hadith
router.get("/hadith", getAllHadith);

// section
router.get("/section", getAllSection);

module.exports = router;
