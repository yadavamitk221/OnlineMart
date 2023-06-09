const mongoose = require('mongoose');

const StoreInfoSchema = new mongoose.Schema({
    storeName: {
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
    startTiming: {
        type: String,
        require: true
    },
    closeTiming: {
        type: String,
        require: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});

const Store = mongoose.model('Store', StoreInfoSchema);
module.exports = Store;