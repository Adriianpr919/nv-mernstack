const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const SizedSchema = new mongoose.Schema(
    {
        fileName: {
            type: 'String',
            required: true,
        },
        productName: {
            type: 'String',
            required: true,
            trim: true,
            maxlength: 60,
        },
        productCategory: {
            type: ObjectId,
            ref: 'Category',
            required: true,
        },
    }, 
    { timestamps: true }
);

SizedSchema.index({ productName: 'text' });
const Sized = mongoose.model('Sized', SizedSchema);

module.exports = Sized;