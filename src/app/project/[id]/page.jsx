import styles from './singleprojectid.module.css';
import React from 'react';
import {getSingleProject} from "@/lib/data";


const singleProject = async ({params}) => {
    const {id} = params

    const post = await getSingleProject(id);


    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>{post.name}</h1>
            </div>
            <div className={styles.descriptionContainer}>
                <p>{post.description}</p>
            </div>

            <div className={styles.techContainer}>
                <p>Tech used</p>
                <ul>
                    {
                        post.tech.map((tech) => {
                            return (
                                <li key={tech}>{tech}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default singleProject;