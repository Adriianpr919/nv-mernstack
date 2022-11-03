const mongoose = require('mongoose');

const SizedSchema = new mongoose.Schema(
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

const Sized = mongoose.model('Sized', SizedSchema);

module.exports = Sized;