const mongoose = require("mongoose");

const FMSSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    FBlink: {
        type: String,
        required: true,
    },
    SPlink: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

const forms = mongoose.model("formData", FMSSchema);

module.exports = {
    forms,
}


