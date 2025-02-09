const Form = require("../Models/CustomformsSchema");
const Question = require("../Models/QuestionsSchema");
const mongoose = require("mongoose")


async function getForm(req, res) {
    const { name, semester } = req.body;

    if (!name || !semester) return res.status(400).json({ msg: "missing fields " })
    const form = await Form.findOne({ name, semester })
        .populate("questions");
    if (!form) return res.status(404).json({ message: "Form not found" });
    res.json(form); 
}

module.exports = {
    getForm,
}