/** @format */

const Inventory = require("../models/Inventory");
const Category = require("../models/Category");
const subCategory = require("../models/SubCategory");
const Store = require("../models/Store");

// Handle adding an inventory item
exports.addInventory = async (req, res) => {
  // Validate input fields
  let reqcategory = req.params["category"];
  let reqsubcatgory = req.params["subCategory"];

  try {
    // Fionding Store of associated with logedin user
    const store = await Store.findOne({ userid: req.user.id });
    console.log("dwew", req.file);
    // finding the category in
    const category = await Category.findOne({
      name: reqcategory,
      userid: req.user.id,
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
    const subCategorys = await subCategory.findOne({
      name: reqsubcatgory,
      userid: req.user.id,
    });
    let subCategory_id;
    if (subCategorys) {
      subCategory_id = subCategorys._id;
    } else {
      const newsubCategory = await subCategory.create({
        name: reqsubcatgory,
        categoryid: category_id,
        userid: req.user.id,
      });
      subCategory_id = newsubCategory._id;
    };
    
    await Inventory.create({
      productName: req.body.productName,
      mrp: req.body.mrp,
      sp: req.body.sp,
      qty: req.body.qty,
      subCategoryid: subCategory_id,
      categoryid: category_id,
      image: req.body.file,
      storeid: store._id,
      userid: req.user.id,
    });

    if (req.xhr) {
      return res.status(200).json({
        message: "Inventory is created",
      });
    }

    return res.redirect("back");
  } catch (error) {
    console.log("Error in adding the inventory", error);
    return res
      .status(400)
      .json({ message: "product didn't added please try again" });
  }

  // Save the inventory item to the database
  // Redirect to the inventory page or send a success response
};

module.exports.inventoryForm = async function(req, res) {
  try {
    let subcatageory = await subCategory.find({ userid: req.user.id }).populate(
      "categoryid",
      "name"
    );

    const data = {};
    subcatageory.forEach((item) => {
      const category = item.categoryid.name;
      if (!data[category]) {
        data[category] = [];
      }
      data[category].push(item.name);
    });

    console.log(data);

    return res.render("inventory", {
      title: "Add inventory",
      data,
    });
  } catch (err) {
    console.log("Error in showing Category Details ==> ", err);
    return res.redirect("back");
  }
};


module.exports.getCategorys = async function (req, res) {
  try {
    let subcatageory = await subCategory.find({ userid: req.user.id }).populate(
      "categoryid",
      "name"
    );

    const data = {};
    subcatageory.forEach((item) => {
      const category = item.categoryid.name;
      if (!data[category]) {
        data[category] = [];
      }
      data[category].push(item.name);
    });

    console.log(data);

    return res.status(200).json({data});
  } catch (err) {
    console.log("Error in showing Category Details ==> ", err);
    return res.redirect("back");
  }
};
