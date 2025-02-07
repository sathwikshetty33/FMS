const express = require("express");
const router = express.Router();

const { handelcreate } = require("../Controllers/feedbackcreator");


router.get("/", (req, res) => {
    return res.status(200).render("admin");
})


router.route("/create")
    .get((req, res) => {
        return res.status(200).render("create");
    })
    .post(handelcreate);

module.exports = {
    router,
}