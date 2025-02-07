const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
    text: String,
    options: [
        String
    ]
});


const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);
//  = mongoose.model("Question", questionSchema);
module.exports = Question;
