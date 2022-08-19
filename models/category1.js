const mongoose = require('mongoose');

const category1Schema = new mongoose.Schema(
    {
        category1: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
    },
    { timestamps: true }
);

const Category1 = mongoose.model('Category1', category1Schema);

module.exports = Category1;