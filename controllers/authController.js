/** @format */
const User = require("../models/User");

// Handle user sign-up
exports.signup = async (req, res) => {
  // Validate input fields
  try {
    if (req.body.password != req.body.confirm_password) {
      return res.redirect("back");
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      await User.create(req.body);
      return res.redirect("/users/signin");
    } else {
      return res.redirect("/users/signin");
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
exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.redirect('back');
    } else {
      if (user.password === req.body.password) {
        return res.end('<h1>Hello You are Sign in </h1>');
      }
      return res.redirect('back');
    }
  } catch (error) {
    console.log(`Error in login the user ${err}`);
    return res.status(400).json({message: "Invalid userID and Password"});
  }


  // Validate input fields
  // Compare passwords and perform authentication
  // Set up sessions or JWT for authentication
  // Redirect to the dashboard or send a success response
};
