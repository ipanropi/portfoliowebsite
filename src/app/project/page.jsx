import React from 'react';
import styles from './project.module.css';
import ProjectCard from "@/components/projectcard/ProjectCard";
import {getProjects} from "@/lib/data";


const Project = async () => {
    // const tempProjectData = [
    //     {
    //         name: "Project 1",
    //         description: "Page 1 description",
    //         tech: ["React", "Node.js", "MongoDB"],
    //         image: "/githubLogo.png",
    //     },
    //     {
    //         name: "Project 2",
    //         description: "Page 2 description",
    //         tech: ["React", "Node.js", "MongoDB"],
    //         image: "/githubLogo.png",
    //     },
    //     {
    //         name: "Project 3",
    //         description: "Page 3 description",
    //         tech: ["React", "Node.js", "MongoDB"],
    //         image: "/githubLogo.png",
    //     },
    //     {
    //         name: "Project 1",
    //         description: "Page 1 description",
    //         tech: ["React", "Node.js", "MongoDB"],
    //         image: "/githubLogo.png",
    //     },
    //     {
    //         name: "Project 2",
    //         description: "Page 2 description",
    //         tech: ["React", "Node.js", "MongoDB"],
    //         image: "/githubLogo.png",
    //     },
    //     {
    //         name: "Project 3",
    //         description: "Page 3 description",
    //         tech: ["React", "Node.js", "MongoDB"],
    //         image: "/githubLogo.png",
    //     }
    // ]

    const text = "Projects";

    const tempProjectData = await getProjects();


    return (
        <ProjectCard data={tempProjectData} text={text} isPreview={false}/>
    );
};

export default Project;