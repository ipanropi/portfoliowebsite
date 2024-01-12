"use client"

import React from 'react';
import Link from "next/link";
import styles from './icons.module.css';
import Image from "next/image";


const Icons = ({data}) => {
    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                (item.username === "irfan100053@gmail.com") ? (
                        <Link className={styles.link} key={index} target="_blank" href="#" onClick={(e) => {
                            e.preventDefault()
                            window.location.href = item.link;
                        }}>
                            <Image className={styles.image} src={item.image} alt={item.username} width={150} height={150}/>
                            <p>{item.username}</p>
                        </Link>
                    ) :

                    (<Link className={styles.link} key={index} target="_blank" href={item.link}>
                        <Image className={styles.image} src={item.image} alt={item.username} width={150} height={150}/>
                        <p>{item.username}</p>
                    </Link>)
            ))}
        </div>
    );
};

export default Icons;