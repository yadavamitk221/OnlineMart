/** @format */

const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

// authentication using passpport
passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
        },
       async function (email, password, done) {
            // find the user and establish the identity
            const user = await User.findOne({ email: email });
            if (!user || user.password != password) {
                console.log("Invalid username/password");
                return done(null, false);
            }
            return done(null, user);
        }
    ));

// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser(async function (id, done) {
  try {
      const user = await User.findById(id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
  } catch (error) {
    console.log(`Error in find the user ---> passport`);
    return done(err);
  }
});

// check if the user is authenticated

passport.checkAuthentication = function (req, res, next) {
  // if the user is signin then pass on the request to the next function
  if (req.isAuthenticated()) {
    return next();
  }

  // if the user is not signed
  return res.redirect("/auth/signin");
};

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    // req.user contained the current signened user information and we are just sending it to the locals for views
    res.locals.user = req.user;
  }
  next();
};

module.exports = passport;
