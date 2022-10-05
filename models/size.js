const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const SizeSchema = new mongoose.Schema(
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

SizeSchema.index({ productName: 'text' });
const Size = mongoose.model('Size', SizeSchema);

module.exports = Size;