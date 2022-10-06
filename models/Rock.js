const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const RockSchema = new mongoose.Schema(
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

RockSchema.index({ productName: 'text' });
const Rock = mongoose.model('Rock', RockSchema);

module.exports = Rock;