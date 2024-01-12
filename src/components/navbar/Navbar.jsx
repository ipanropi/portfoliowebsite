"use client";

import React from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import {usePathname} from "next/navigation";
import Navlink from "@/components/navbar/navlink/Navlink";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <div className={styles.menuContainer}>
                <Navlink path={pathname}/>
            </div>
        </div>
    );
};

export default Navbar;