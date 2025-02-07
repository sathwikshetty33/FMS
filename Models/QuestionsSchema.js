const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    formId: {},
    text: String,
    options:
     {
        option1:{
            type:String,
            required:true,
        },option2:{
            type:String,
            required:true,
        },option3:{
            type:String,
            required:true,
        },option4:{
            type:String,
            required:true,
        }
    }
}
);


const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);
//  = mongoose.model("Question", questionSchema);
module.exports = Question;
