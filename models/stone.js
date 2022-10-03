const mongoose = require('mongoose');

const rockSchema = new mongoose.Schema(
    {
        rock: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
    }, 
    { timestamps: true }
);

const Rock = mongoose.model('Rock', rockSchema);

module.exports = Rock;