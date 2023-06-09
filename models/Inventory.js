const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true,
    },
    mrp: {
        type: Number,
        require: true
    },
    sp: {
        type: Number,
        require: true
    },
    qty: {
        type: Number,
        require: true
    },
    image: {
        type: String
    },
    subCategoryid :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: true
    },
    categoryid :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        req: true
    }, 
    storeid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        req: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        req: true
    }
},{
    timestamps: true
});

const Inventory = mongoose.model('Inventory', InventorySchema);
module.exports = Inventory;