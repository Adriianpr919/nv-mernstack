const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema(
    {
        size: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
    },
    { timestamps: true }
);

const Size = mongoose.model('Size', sizeSchema);

module.exports = Size;