const express = require('express');
const passport = require('passport'); 
const router = express.Router();

const storeController = require('../controllers/storeController');

router.post('/addStore', passport.checkAuthentication, storeController.addStoreInfo);
router.get('/storeForm', passport.checkAuthentication, storeController.storeForm);
router.get('/delete/:id', passport.checkAuthentication, storeController.destroy);


// use passport as middleware to authenticate 


module.exports = router;