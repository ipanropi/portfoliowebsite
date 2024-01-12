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
                    Hello! I&apos;m Muhammad Irfan Bin Mohd Ropi

                    Welcome to my page! I&apos;m a second-year student at the University of Wisconsin-Madison, studying Computer Science and Data Science. I&apos;m here on a scholarship from Malaysia, which I got because of my good grades (I&apos;ve got a CGPA of 3.8!).

                    At university, I&apos;m part of the Malaysian Student Organization. It&apos;s a great group where we Malaysian students get together, share experiences, and have fun. It&apos;s like a little piece of home for me here in Madison.

                    When I&apos;m not busy with my studies, I have a bunch of hobbies. I like to stay fit, so I work out regularly. I&apos;m also a big fan of video games – they&apos;re my go-to way to relax. Reading books and fishing are my other hobbies. I love the peace and quiet of fishing, and reading always keeps my mind sharp.

                    My big goal after university is to become a software engineer. I want to be part of a team that creates apps that really help people in their everyday lives. I&apos;m all about working hard, learning as much as I can, and being a good team player.

                    This website is my space to share my university journey, what I learn, and where I&apos;m heading in my career. Thanks for stopping by and getting to know a bit about me!
                </p>
            </div>
        </div>
    );
};

export default AboutPages;