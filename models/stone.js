const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const StoneSchema = new mongoose.Schema(
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

StoneSchema.index({ productName: 'text' });
const Stone = mongoose.model('Stone', StoneSchema);

module.exports = Stone;