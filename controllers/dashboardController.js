const Store = require('../models/Store');
exports.dashboardDetails = async (req, res) => {
    const store = await Store.findOne({userid: req.user.id});
    return res.render('dashboard', {
        storeDetails: store
    });
}