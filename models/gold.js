const mongoose = require('mongoose');

const goldenSchema = new mongoose.Schema(
    {
        golden: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
    }, 
    { timestamps: true }
);

const Golden = mongoose.model('Golden', goldenSchema);

module.exports = Golden;