const mongoose=require('mongoose');
const todoSchemaType=new mongoose.Schema({
    todo: {
        type: String,
        required: true,
        index:{
            unique:true,
        }
    },
    desc:{
        type:String        
    }
   })
module.exports=mongoose.model('todocollection',todoSchemaType);