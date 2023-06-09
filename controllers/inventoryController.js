/** @format */

const Inventory = require("../models/Inventory");
const Category = require("../models/Category");
const subCategory = require("../models/SubCategory");
const Store = require('../models/Store');

// Handle adding an inventory item
exports.addInventory = async (req, res) => {
  // Validate input fields
  let reqcategory = req.params["category"].slice(1);
  let reqsubcatgory = req.params["subCategory"].slice(1);


  try {
    // Fionding Store of associated with logedin user
    const store = await Store.findOne({ userid: req.user.id });
  
    // finding the category in
    const category = await Category.findOne({
      name: reqcategory,
      userid: req.user.id
    });


    // Checking if category exist, if not then creating
    let category_id;
    if (category) {
      category_id = category._id;
    } else {
      const newCategory = await Category.create({
        name: reqcategory,   
        userid: req.user.id,
      });
      category_id = newCategory._id;
    }

    // Checking if subCategory exist, if not then creating
    const subCategorys = await subCategory.findOne({name: reqsubcatgory, userid: req.user.id });
    let subCategory_id;
    if (subCategorys) {
      subCategory_id = subCategorys._id;
    } else {
      console.log("name", reqsubcatgory);
      console.log("categoryid", category_id);
      console.log("userid", req.user.id);


        const newsubCategory = await subCategory.create({
        name: reqsubcatgory,
        categoryid: category_id,
        userid: req.user.id,
      });
      subCategory_id = newsubCategory._id;
    }

    // creating new inventory
    console.log(req.body);
    await Inventory.create({
      productName: req.body.productName,
      mrp: req.body.mrp,
      sp: req.body.sp,
      qty: req.body.qty,
      subCategoryid: subCategory_id,
      categoryid: category_id,
      storeid: store._id,
      userid: req.user.id
    });
  } catch (error) {
    console.log("Error in adding the inventory", error);
    return res
      .status(400)
      .json({ message: "product didn't added please try again" });
  }

  // Save the inventory item to the database
  // Redirect to the inventory page or send a success response
};

// Handle editing an inv up sessions or JWT for authentication
// Redirect to the dashboarentory item
exports.editInventory = async (req, res) => {
  // Validate input fields
  // Update the inventory item in the database
  // Redirect to the inventory page or send a success response
};

// Handle deleting an inventory item
// exports.deleteInventory

exports.inventoryForm = (req, res) => {
  try {
    return res.render("Inventory");
  } catch (error) {
    console.log("error in rendering the Inventory form page", error);
  }
};
