const ProductModel = require("../models/ProductsModel");
// const cloudinary = require("../helper/cloudinaryConfig")
exports.CreateProduct = async (req, res) => {
  try {
    const { ProductName, ProductPrice, Img, UnitPrice, Qty, TotalPrice } =
      req.body;
    //cloudinary image hosting connect
    // let imageCloud = await cloudinary.uploader.upload(req.file.path, {
    //   folder: "Products",
    // });
    const product = await new ProductModel({
      ProductName,
      ProductPrice,
      Img,
      UnitPrice,
      Qty,
      TotalPrice,
      // image: {
      //   publicID: imageCloud.public_id,
      //   url: imageCloud.secure_url,
      // },
    });
    await product.save();
    res.status(200).json({ status: "success", product });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

//read product
exports.ReadProduct = async (req, res) => {
  try {
    //   let Query = {};
    //   let projection = "ProductName ProductPrice Img UnitPrice Qty TotalPrice";
    const product = await ProductModel.find({});
    if (product) {
      res.status(200).json({ message: "Success get product", product });
    }
  } catch (err) {
    res.status(404).json({ error: "Failed to get product" });
  }
};

//get product by id
exports.GetProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await ProductModel.findById({ _id: productId });
    if (product) {
      res.status(200).json({ message: "get success by id", product });
    }
  } catch (err) {
    console.log(err);
  }
};

//update products
exports.UpdateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updateTaskStatus = await ProductModel.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );
    res.json(updateTaskStatus);
  } catch (error) {
    res.status(500).json({ error: "fail to update product" });
  }
};

//delete
exports.DeleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await ProductModel.findByIdAndDelete({ _id: productId });
    res.status(200).json({ message: "Success delete product", product });
  } catch (err) {
    res.status(200).json({ message: "product not delete" });
  }
};
