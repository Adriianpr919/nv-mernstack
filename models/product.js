const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
    {
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
        productSize: {
            type: ObjectId,
            ref: 'Size',
            required: true,
        },
        productGold: {
            type: ObjectId,
            ref: 'Gold',
            required: true,
        },
        productStone: {
            type: ObjectId,
            ref: 'Stone',
            required: true,
        }, 
        productPreviousPrice: {
            type: Number,
            required: true,
        },
        productActualPrice: {
            type: Number,
            required: true,
        },
        productQty: {
            type: Number,
            required: true,
        },
        productDesc: {
            type: 'String',
            trim: true,
        },
        fileName1: {
            type: 'String',
            required: true,
        },
        fileName2: {
            type: 'String',
            required: true,
        },
        fileName3: {
            type: 'String',
            required: true,
        },
        fileName4: {
            type: 'String',
            required: true,
        },
        fileName5: {
            type: 'String',
            required: true,
        },
        fileName6: {
            type: 'String',
            required: true,
        },
        fileName7: {
            type: 'String',
            required: true,
        },
        fileName8: {
            type: 'String',
            required: true,
        },
    }, 
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;