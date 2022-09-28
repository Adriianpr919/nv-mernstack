const mongoose = require('mongoose');

const goldSchema = new mongoose.Schema(
    {
        golden: {
            type: String,
            required: true,
            trim: true,
            maxlength: 255,
        },
    }, 
    { timestamps: true }
);

const Golden = mongoose.model('Golden', goldSchema);

module.exports = Golden;