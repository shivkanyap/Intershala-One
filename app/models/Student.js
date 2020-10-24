const mongoose=require('mongoose')
const Schema=mongoose.Schema

const studentSchema=new Schema({
    sid:{
        type:Number
    },
    name:{
        type:String,
        required:true
    },
    yob:{
        type:Number,
        required:true
    },
    college_id:{
        type:Schema.Types.ObjectId,
        ref:'College'
    },
    skills:{
        type:[String],
        required:true
    }
})


const Student=mongoose.model('Student',studentSchema)
module.exports={
   Student
}