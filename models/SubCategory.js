const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    categoryid :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        req: true
    }
},{
    timestamps: true
});

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);
module.exports = SubCategory;