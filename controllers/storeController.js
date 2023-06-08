/** @format */

const Store = require("../models/Store");

// Handle addStoreInfo
exports.addStoreInfo = async (req, res) => {
  try {
    const storeName = await Store.findOne({ name: req.body.name });
    if (storeName) {
      return res
        .status(400)
        .json({ message: "Store with this name is already registered" });
    } else {
      await Store.create(req.body);
      return res
        .status(201)
        .json({ message: `Store ${req.body.name} created` });
    }
  } catch (error) {
      console.log("Error in creating the store", error);
      return res.status(400).json({ message: "Store is not register please try again" });
  }
};
