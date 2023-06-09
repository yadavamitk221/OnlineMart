const express = require('express');
const passport = require('passport'); 
const router = express.Router();

const landingPageController = require('../controllers/landingPageController');

router.get('/', landingPageController.renderLanding);


// use passport as middleware to authenticate 
module.exports = router;