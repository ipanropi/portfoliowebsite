"use client";

import React, {useEffect, useState} from 'react';
import styles from './projectcard.module.css';
import Image from "next/image";
import Search from "@/components/search/search";
import Link from "next/link";

const ProjectCard = ({data, text, isPreview}) => {
    const [filteredData, setFilteredData] = useState(data)

    let newData;


    const setSearch = (search) => {
        if (search){
            newData = data.filter((project) =>
                project.name.toLowerCase().includes(search.toLowerCase())
                || project.description.toLowerCase().includes(search.toLowerCase())
                || project.tech.some((tech) => tech.toLowerCase().includes(search.toLowerCase())))
            console.log(newData);
            setFilteredData(newData)
        }

        else {
            setFilteredData(data)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{text}</h1>
                {
                    !isPreview ? <Search searchFunction={setSearch}/> : null
                }
            </div>
            <div className={styles.cardContainer}>
                {filteredData.length > 0 ? (filteredData.map((project) => {
                    return (
                            <div key={project.name} className={styles.card}>
                                <Link className={styles.links} href={`/project/${project._id}`} key={project._id}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        className={styles.image}
                                        src={project.image}
                                        alt={project.name}
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className={styles.topContainer}>
                                    <h3 className={styles.projectTitle}>{project.name}</h3>
                                    <p className={styles.description}>{project.description}</p>
                                </div>

                                </Link>
                            </div>
                    )
                    })) :
                    <div className={styles.notFoundCard}>
                        <p>No projects found</p>
                    </div>}
            </div>

        </div>
    );
};

export default ProjectCard;