const mongoose = require('mongoose');

const goldSchema = new mongoose.Schema(
    {
        gold: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
    },
    { timestamps: true }
);

const Gold = mongoose.model('Gold', goldSchema);

module.exports = Gold;