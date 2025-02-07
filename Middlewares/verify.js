const { getuser } = require("../service/auth")

async function verifyadmin(req, res, next) {
    const cookie = req.cookies.ID;

    if (!cookie) return res.status(400).redirect("/login");

    const admin = getuser(cookie);
    if (!admin) return res.status(400).redirect("/login");

    next();
}


module.exports = {
    verifyadmin,
}