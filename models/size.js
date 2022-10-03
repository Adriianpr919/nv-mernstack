const mongoose = require('mongoose');

const sizedSchema = new mongoose.Schema(
    {
        sized: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
    }, 
    { timestamps: true }
);

const Sized = mongoose.model('Sized', sizedSchema);

module.exports = Sized;