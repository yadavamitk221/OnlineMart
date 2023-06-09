// Handle rendering of the dashboard
const Store = require('../models/Store');

exports.renderLanding = async (req, res) => {
  try {
    const stores = await Store.find({});
      res.render('landingPage', {
        stores: stores
      });
    } catch (error) {
      console.log('Error', error);
      return;
    }
  };
  