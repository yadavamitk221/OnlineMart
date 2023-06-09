const express = require('express');
const passport = require('passport'); 
const router = express.Router();

const dashboardController = require('../controllers/dashboardController');

router.get('/details', passport.checkAuthentication ,dashboardController.dashboardDetails);


// use passport as middleware to authenticate 


module.exports = router;