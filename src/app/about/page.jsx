import React from 'react';
import styles from './about.module.css'
import image from '../../../public/passportImage.png'
import Image from "next/image";

const AboutPages = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={image} alt="image" width={500} height={500}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    About me
                </h1>
                <p className={styles.desc}>
                    Hello! I&apos;m Muhammad Irfan, a scholarship student from Malaysia studying Computer Science and Data Science at the University of Wisconsin-Madison. Active in the Malaysian Student Organization, I balance my 3.8 CGPA with hobbies like fitness, video gaming, reading, and fishing. Aspiring to be a software engineer, I aim to develop apps that improve lives. This page shares my university journey and career aspirations. Thanks for visiting!
                </p>
            </div>
        </div>
    );
};

export default AboutPages;