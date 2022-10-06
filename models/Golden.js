const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const GoldenSchema = new mongoose.Schema(
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

GoldenSchema.index({ productName: 'text' });
const Golden = mongoose.model('Golden', GoldenSchema);

module.exports = Golden;