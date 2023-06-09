/** @format */
const Category = require("../models/Store");
// Handle addStoreInfo
exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        console.log(category);
  }catch (error) {
      console.log("Error in creating the Category", error);
      return res.status(400).json({ message: "category is not register please try again" });
  }
};
