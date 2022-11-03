const mongoose = require('mongoose');

const GoldenSchema = new mongoose.Schema(
    {
        golden: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
    },
    { timestamps: true }
);

const Golden = mongoose.model('Golden', GoldenSchema);

module.exports = Golden;