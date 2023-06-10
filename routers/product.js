4/** @format */
const express = require("express");
const router = express.Router();

const showProductController = require("../controllers/showProductController");

router.get(
  "/showProduct/:id",
  showProductController.showProducts
);


router.get(
  "/showProduct/:id/:search",
  showProductController.showProductsAjax
);
// use passport as middleware to authenticate

module.exports = router;
