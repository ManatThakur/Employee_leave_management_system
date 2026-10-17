const mongoose=require('mongoose');
const DETAILS_SCHEMA=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    leave_type:{
        
        type:String,
        required:true
    },
   from_date:{
        type:Date,
        required:true
    },
    to_date:{
        type:Date,
        required:true
    },
    reason:{
        type:String,
        required:true
    }
});

const DETAILS_MODEL=mongoose.model('details',DETAILS_SCHEMA);
module.exports=DETAILS_MODEL;