import {connectDB} from "@/lib/connectDB";
import {Project} from "@/lib/models";

export const getProjects = async () => {
    try{
        await connectDB();

        return await Project.find();


    }catch (error){
        console.log(error);
    }
}

export const getSingleProject = async (id) => {
    try {
        await connectDB();

        return await Project.findById(id);
    }catch (error){
        console.log(error);
    }
}