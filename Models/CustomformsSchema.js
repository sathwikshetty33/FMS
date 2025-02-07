const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  // questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  questions: {},
  createdAt: { type: Date, default: Date.now }
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);
// = mongoose.model("Customform", formSchema);
module.exports = Form;


