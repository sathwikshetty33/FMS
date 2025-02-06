const express = require("express");
const logrouter = express.Router();

const { handellogin } = require("../Controllers/login")

logrouter.route("/")
    .get((req, res) => {
        return res.status(200).render("login");
    })
    .post(handellogin);

module.exports = {
    logrouter,
}