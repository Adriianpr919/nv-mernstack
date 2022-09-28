const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema(
    {
        sized: {
            type: String,
            required: true,
            trim: true,
            maxlength: 255,
        },
    }, 
    { timestamps: true }
);

const Sized = mongoose.model('Sized', sizeSchema);

module.exports = Sized;