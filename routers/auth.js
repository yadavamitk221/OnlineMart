const express = require('express');
const passport = require('passport'); 
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/create-user', authController.createUser);
router.get('/create-session', authController.createSession);
router.get('/signin', authController.signin);
router.get('/signup', authController.signup);
router.get('/signout', authController.signout);

// use passport as middleware to authenticate 
router.post('/create-session', passport.authenticate(
    'local',
    {fialureRedirect: '/auth/signin'}
), authController.createSession);


module.exports = router;