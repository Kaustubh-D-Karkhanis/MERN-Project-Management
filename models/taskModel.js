
const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    Task_Name: {
      type: String,
      required: [true, 'A task must have a name'],
      unique: true
    },
    Instructions: {
      type: String,
      default: "It is a default task" 
    },
    ProjectId: String,
    EmployeeId: String,
    Deadline_Date: {
      type: Date,
      required: [true, 'A task must have a deadline date']
    },
    Department: String,
    Completed: Boolean
  })
  
  const Task = mongoose.model('Task',taskSchema);
  module.exports = Task;