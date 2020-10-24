const mongoose=require('mongoose')
const Schema=mongoose.Schema

const collegeSchema=new Schema({

    cid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    noofstudent:{
        type:Number,
        required:true
    },
    courses:{
        type:[String],
        required:true
    }

    

})

const College=mongoose.model('College',collegeSchema)
module.exports={
    College
}