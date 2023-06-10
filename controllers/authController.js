/** @format */
const User = require("../models/User");


// Handle user sign-up
exports.createUser = async (req, res) => {
  // Validate input fields
  try {
    if (req.body.password != req.body.confirm_password) {
      return res.redirect("back");
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      await User.create(req.body);
      return res.redirect("/auth/signin");
    } else {
      return res.redirect("/auth/signin");
    }
  } catch (err) {
    console.log(`Error in regestering the user ${err}`);
    return res.status(400).json({message: "User Not register Please try again"});
  }

  // Hash the password
  // Save user details to the database
  // Redirect to the dashboard or send a success response
};

// Handle user login
exports.createSession = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.log("No user found", user);
      return res.redirect('back');
    } else {
      if (user.password === req.body.password) {
        return res.redirect('/dashboard/details');
      }
      console.log("password didnot match", user);
      return res.redirect('back');
    }
  } catch (err) {
    console.log(`Error in login the user ${err}`);
    return res.status(400).json({message: "Invalid userID and Password"});
  }
  // Validate input fields
  // Compare passwords and perform authentication
  // Set up sessions or JWT for authentication
  // Redirect to the dashboard or send a success response
};

module.exports.signin = function (req, res) {
  return res.render('signin');
}

module.exports.signup = function (req, res) {
  return res.render('signup');
}

module.exports.signout = function (req, res) {

    
    req.logout(function(err){
    if(err){
        console.log(`Error in siging out ${err}`);
    }
});
  return res.render('signin');
}