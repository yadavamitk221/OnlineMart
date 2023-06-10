/** @format */
const express = require("express");
const passport = require("passport");
const router = express.Router();
const upload = require('../config/multer');

const inventoryController = require("../controllers/inventoryController");

router.post(
  "/addInventory/:category/:subCategory",
  upload.single("filename"),
  passport.checkAuthentication,
  inventoryController.addInventory
);

// router.delete(
//     "/addStore",
//     passport.checkAuthentication,
//     inventoryController.deleteInventory
// );

// router.post(
//     "/addStore",
//     passport.checkAuthentication,
//     inventoryController.editInventory
// );

router.get("/inventoryForm", inventoryController.inventoryForm);

router.get("/getCategory/ajax", inventoryController.getCategorys);

router.get("/category", inventoryController.inventoryForm);

// use passport as middleware to authenticate

module.exports = router;
