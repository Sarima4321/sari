const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let student= new Schema({
    student_name:{type: String},
    student_dept:{type: String},
    student_age:{type: String}
})
module.exports=mongoose.model("student",student);