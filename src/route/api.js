const {
  CreateProduct,
  ReadProduct,
  UpdateProduct,
  DeleteProduct,
  GetProductById,
} = require("../controller/ProductController");
// const upload = require("../helper/multerConfig")
const router = require("express").Router();

module.exports = router;
