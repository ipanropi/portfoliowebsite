import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>Irfan Ropi</div>
            <div className={styles.center}>Copyright &copy; {new Date().getFullYear()}</div>
            <div className={styles.right}>Portfolio Website</div>
        </div>
    );
};

export default Footer;