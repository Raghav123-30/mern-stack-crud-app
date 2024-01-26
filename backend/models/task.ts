import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 50,
    minlength: 3,
    required: true,
  },
  description: {
    type: String,
    maxlength: 500,
    minlength: 3,
    required: true,
  },
});

export const task = mongoose.models.task || mongoose.model("task", taskSchema);
