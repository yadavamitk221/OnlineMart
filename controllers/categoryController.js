/** @format */
const Store = require("../models/Store");
const Category = require("../models/Category");
const SubCatageory = require("../models/SubCategory");

module.exports.category = async function (req, res) {
  try {
    let subcatageory = await SubCatageory.find({ user: req.user.id }).populate(
      "category",
      "category"
    );

    return res.render("category", {
      title: "Add Category",
      subcatageory,
    });
  } catch (err) {
    console.log("Error in showing Category Details ==> ", err);
    return res.redirect("back");
  }
};

// Adding store info in mongoDB
module.exports.addCategory = async function (req, res) {
  try {
    let category = await Category.findOne({ name: req.body.category });
    let subCatageory = await SubCatageory.findOne({
      name: req.body.subcategory,
    });

    if (!category) {
      category = await Category.create({
        name: req.body.category,
        userid: req.user.id,
      });
    }

    if (subCatageory) {
      console.log("This is already present");
      return res.redirect("back");
    }

    let obj = {
      categoryid: category.id,
      name: req.body.subcategory,
      userid: req.user.id,
    };

    await SubCatageory.create(obj);

    return res.redirect("back");
  } catch (err) {
    console.log("Error in Creating new Store, Error ==> ", err);
  }
};
