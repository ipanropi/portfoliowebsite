"use server"
import React from 'react';
import styles from './page.module.css';
import ProjectCard from "@/components/projectcard/ProjectCard";
import {getProjects} from "@/lib/data";

const Home = async () => {

    const tempProjectData = await getProjects();


    return (
        <div className={styles.container}>
            <div id="intro" className={styles.introContainer}>
                <div className={styles.introText}>
                    <h1 className={styles.titles}>Hi There, I&apos;m Irfan</h1>
                    <p className={styles.subtitles}>Welcome to my portfolio</p>
                </div>
            </div>
            <ProjectCard data={tempProjectData} text={'Preview of projects'} isPreview={true}/>
        </div>
    );
};

export default Home;