let mongoose = require('mongoose');


//schema creation : creating a strucuture of to-do app
let todoSchema = mongoose.Schema({
    title : {type: String,required : true},
    description : {type:String,required:false,maxLength:120},
    createdAt : {type:Date,default:Date.now}


})

module.exports = mongoose.model("todoapp",todoSchema)


//note when we install new model using cmd the must restart the cmd becuase it may show tyhe eoor cannot be recognozed