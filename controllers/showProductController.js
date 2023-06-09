const Inventory = require('../models/Inventory');
const Store = require('../models/Store');

module.exports.showProducts = async (req, res) => {
    try {
        const store = await Store.findOne({ userid: req.params.id });
        const products = await Inventory.find({ userid: req.params.id });
        console.log(products);
        return res.render('showProduct', {
            products: products,
            store: store    
        })      
    } catch (error) {
        console.log(`error in fetching the products form inventory ${error}`);
        return;
    }
   
}