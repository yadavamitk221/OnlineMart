const express = require('express');
const app = express();

// Configure middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Database connection
const db = require('./config/db');

// Routes
const authRoutes = require('./routers/auth');
// const dashboardRoutes = require('./routers/dashboard');
// const inventoryRoutes = require('./routers/inventory');
// const storeRoutes = require('./routers/store');
// const categoryRoutes = require('./routers/category');
// const subcategoryRoutes = require('./routers/subcategory');

app.use('/auth', authRoutes);
// app.use('/dashboard', dashboardRoutes);
// app.use('/inventory', inventoryRoutes);
// app.use('/store', storeRoutes);
// app.use('/category', categoryRoutes);
// app.use('/subcategory', subcategoryRoutes);

// Start the server
app.listen(8000, () => {
  console.log('Server started on port 8000');
});
