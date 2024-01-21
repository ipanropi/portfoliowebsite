"use client"
import React, {useRef, useState} from 'react';
import styles from './addproject.module.css';
const Page = () => {
    const [tech, setTech] = useState(["tech1", "tech2"]);
    const newTech = useRef(null);
    const projectNameRef = useRef(null);
    const projectDescriptionRef = useRef(null);

    const handleForm = (e) => {
        e.preventDefault();
        console.log(projectNameRef.current.value);
        console.log(projectDescriptionRef.current.value);
        console.log(tech);
    }

    const handleAddTech = (e) => {
        e.preventDefault();
        setTech([...tech, (newTech.current.value)])
    }

    const handleRemoveTech = (e) => {
        e.preventDefault()
        setTech(tech.filter((tech) => tech !== newTech.current.value))
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>Add New Project</h1>
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleForm}>
                    <div className={styles.upper}>
                        <label htmlFor="projectName">Project Name:</label>
                        <input className={styles.projectNameInput} ref={projectNameRef} type="text" name="projectName" placeholder="Project Name"/>
                        <label htmlFor="projectDescription">Project Description:</label>
                        <textarea className={styles.projectDescriptionInput} ref={projectDescriptionRef} name="projectDescription" placeholder="Project Description"/>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.addTech}>
                            <input className={styles.projectTechInput} type="text" name="projectTech" placeholder="Project Tech" ref={newTech}/>
                            <button className={styles.addTechButton} onClick={handleAddTech}>Add Tech</button>
                            <button className={styles.removeTechButton} onClick={handleRemoveTech}>Remove Tech</button>
                        </div>
                        <div className={styles.displayTech}>
                            {tech.map((tech) => <h1 key={tech}>{tech}</h1>)}
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <button className={styles.submitProjectButton} type="submit">Add Project</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Page;