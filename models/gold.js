const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const GoldSchema = new mongoose.Schema(
    {
        fileName: {
            type: 'String',
            required: true,
        },
        productName: {
            type: 'String',
            required: true,
            trim: true,
            maxlength: 255,
        },
        productCategory: {
            type: ObjectId,
            ref: 'Category',
            required: true,
        },
    }, 
    { timestamps: true }
);

GoldSchema.index({ productName: 'text' });
const Gold = mongoose.model('Gold', GoldSchema);

module.exports = Gold;