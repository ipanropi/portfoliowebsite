import React from 'react';
import styles from './contact.module.css';
import Icons from "@/components/icons/Icons";
import Image from "next/image";

const Contact = () => {
    const data = [
        {
            username: "irfan100053@gmail.com",
            image: '/gmailLogo.png',
            link: "mailto:irfan100053@gmail.com"
        },
        {
            username: "@ipanropi",
            image: '/githubLogo.png',
            link: "https://github.com/ipanropi"
        },
        {
            username: "Muhammad Irfan",
            image: '/linkedinLogo.png',
            link: "https://www.linkedin.com/in/irfanropi"
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.title}>Contact Me Through</div>
            <Icons data={data}/>
        </div>
    );
};

export default Contact;