const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    Category :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
},{
    timestamps: true
});

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);
module.exports = SubCategory;