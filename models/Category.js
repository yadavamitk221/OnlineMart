const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        req: true
    }
},{
    timestamps: true
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;