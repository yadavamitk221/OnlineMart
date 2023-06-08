const mongoose = require('mongoose');

const StoreInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        require: true
    },
    gst: {
        type: String,
        require: true
    },
    logo: {
        type: String,
    },
    storeTimings: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

const Store = mongoose.model('Store', StoreInfoSchema);
module.exports = Store;