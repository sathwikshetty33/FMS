
const Form = require("../Models/CustomformsSchema");
const Question = require("../Models/QuestionsSchema");

async function createForm(req, res) {
    const { name, description, questions, semester, category, status } = req.body;

    if (!name || !questions || !semester || !category || !status)
        return res.status(400).json({ msg: "missing fields" });

    // Create form
    const newForm = new Form({ name, description, semester, category, status });
    await newForm.save();

    // Create questions and link them to the form
    const questionDocs = questions.map(q => ({
        formId: newForm._id,
        text: q.text,
        options: q.options,
    }));
    const savedQuestions = await Question.insertMany(questionDocs);

    // Update form with question IDs
    newForm.questions = savedQuestions.map(q => q._id);
    await newForm.save();

    console.log(newForm);
    return res.json({ message: "Form created successfully", form: newForm ,question:savedQuestions});
}



module.exports = {
    createForm,
}