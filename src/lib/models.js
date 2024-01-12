import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    description:{
        type:String,
        required:true,
        max:200
    },
    tech:{
        type:[String],
        required:true,
        max:50
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export const Project =  mongoose.models.projects || mongoose.model('projects',projectSchema)