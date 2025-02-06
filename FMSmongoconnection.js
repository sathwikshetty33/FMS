const mongoose = require("mongoose");

async function DBconnector(url) {
    return await mongoose.connect(url);
}

module.exports = {
    DBconnector,
}