const mongoose = require('mongoose');

const RockSchema = new mongoose.Schema(
    {
        rock: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
    },
    { timestamps: true }
);

const Rock = mongoose.model('Rock', RockSchema);

module.exports = Rock;