/** @format */

const express = require("express");
const app = express();
const path = require("path");
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const MongoStore = require('connect-mongo');
const passport = require("passport");

// Configure middleware
const passportLocal = require("./config/passport-local");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Database connection
const db = require("./config/db");

app.use(express.static('./assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// set up the view engine
app.set('view engine' , 'ejs' );
app.set('views', path.join(__dirname, 'views'));

// Session to store the loged in user in the db
app.use(
  session({
    name: "OnlineMary",
    // todo change the secret before deployment in production mode
    secret: "Encrypt",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 24*600*60,
    },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost/Online_Mart",
        autoRemove: "disabled", // Default
      },
      function (err) {
        console.log(err);
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// Routes
const authRoutes = require("./routers/auth");
const landingPage = require('./routers/landingpage');
const dashboardRoutes = require('./routers/dashboard');
const inventoryRoutes = require('./routers/inventory');
const storeRoutes = require('./routers/store');
const productRoutes = require('./routers/product');
// const subcategoryRoutes = require('./routers/subcategory');

app.use("/auth", authRoutes);
app.use('/', landingPage);
app.use('/inventory', inventoryRoutes);
app.use('/store', storeRoutes);
app.use('/dashboard', dashboardRoutes); 
app.use('/product', productRoutes);
// app.use('/subcategory', subcategoryRoutes);

// Start the server
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
