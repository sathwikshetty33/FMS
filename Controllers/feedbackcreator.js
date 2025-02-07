const { forms } = require("../Models/GoogleformsSchema");


async function handelcreate(req, res) {
    const body = req.body;
    console.log(body.name, body.FBlink, body.SPlink);
    if (!body.name || !body.FBlink || !body.SPlink) {
        return res.status(400).json({ msg: "missing Fields" });
    }
    const result = await forms.create({
        name: body.name,
        description: body.description,
        FBlink: body.FBlink,
        SPlink: body.SPlink,
        status: body.status,
    })
    console.log("data entered");
    console.log(result);
    res.status(201).redirect("/admin/");
}


module.exports = {
    handelcreate,
}