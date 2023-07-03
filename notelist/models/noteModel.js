const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    _id: String,
    note: String,
    isCompleted: Boolean,
    date: Date
});

export default mongoose.models.noteModel || mongoose.model("noteModel", noteSchema);