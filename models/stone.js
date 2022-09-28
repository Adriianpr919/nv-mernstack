const mongoose = require('mongoose');

const stoneSchema = new mongoose.Schema(
    {
        rock: {
            type: String,
            required: true,
            trim: true,
            maxlength: 255,
        },
    }, 
    { timestamps: true }
);

const Rock = mongoose.model('Rock', stoneSchema);

module.exports = Rock;