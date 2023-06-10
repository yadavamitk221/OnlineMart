const Inventory = require('../models/Inventory');
const Store = require('../models/Store');

module.exports.showProducts = async (req, res) => {
    try {
        const store = await Store.findOne({ userid: req.params.id });
        const products = await Inventory.find({ userid: req.params.id });
        return res.render('showProduct', {
            products: products,
            store: store    
        })      
    } catch (error) {
        console.log(`error in fetching the products form inventory ${error}`);
        return;
    }
    // /product/showProduct/<%=storeDetails.userid%>
}

module.exports.showProductsAjax = async (req, res) => {
    try {

        console.log(req.params.id + " " + req.params.search)
        const search = req.params.search
        const regex = new RegExp(search, 'i'); // Create a regular expression with 'i' flag for case-insensitive search

        const products = await Inventory.find({
            storeid: req.params.id,
            productName: search // Use the $in operator to match productName with the regex
        });

        console.log(products);
        if (req.xhr) {
            return res.status(200).json({
                data: products
            });
          } 
    } catch (error) {
        console.log(`error in fetching the products form inventory ${error}`);
        return;
    }
    // /product/showProduct/<%=storeDetails.userid%>
}