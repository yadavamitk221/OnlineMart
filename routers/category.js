const express = require('express');
const passport = require('passport'); 
const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.post('/addCategory', passport.checkAuthentication , categoryController.addCategory);
router.get('/categoryForm', passport.checkAuthentication, categoryController.category);


// use passport as middleware to authenticate 

module.exports = router;