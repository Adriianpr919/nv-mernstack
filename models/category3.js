const mongoose = require('mongoose');

const stoneSchema = new mongoose.Schema(
    {
        stone: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
    },
    { timestamps: true }
);

const Stone = mongoose.model('Stone', stoneSchema);

module.exports = Stone;