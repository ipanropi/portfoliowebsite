import React from 'react';
import Link from "next/link";
import styles from './navlink.module.css';

const Navlink = ({path}) => {
    const links = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Project",
            link: "/project"
        }
    ];

    console.log(path);
    return (
        <>
            {links.map((data) => {
                return (
                        <Link key={data.name} href={data.link} className={`${styles.menuItem} ${path === data.link && styles.active}`}>{data.name}</Link>
                );
            })}
        </>
    );
};

export default Navlink;