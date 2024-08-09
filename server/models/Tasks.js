const mongoose = require('mongoose')

const TaskSchema = new  mongoose.Schema({
    description : { type : String , require : true},
    deadline : { type : Date , require : true},
    assignedUser : {type : mongoose.Schema.Types.ObjectId , ref : 'User'},
    status : {type : String , default : 'pending'}
});

module.exports = mongoose.model('Task', TaskSchema)