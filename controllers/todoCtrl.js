//need to exported model import
let TodoModel = require("../models/TodoModel")

//first API : TO ADDD TODO
exports.addTodo = (req,res)=>{   //this is for http request and response
    let newTodo = new TodoModel(req.body); //req.body : for form data
    newTodo.save((err,result)=>{          //to insert any document in mongodb
            if(err){
                res.json({         //response must be in json
                 success: false,
                 msg : err
                });                   
            }
            else{
                res.json({         
                    success: true,
                    result : result
                   });
            }
    })              

}  


//need to export this metod becuase this method wiull be used in root
