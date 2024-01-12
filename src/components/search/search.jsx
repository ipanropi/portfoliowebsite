
"use client"

import React, {useState} from 'react';
import styles from './search.module.css';

const Search = ({searchFunction}) => {


    const [search, setSearch] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault
        setSearch(e.target.value)
        searchFunction(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault
        searchFunction(search)
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} action={handleSearch}>
                <input className={styles.input} name="search" value={search} onChange={handleInputChange} placeholder="Search projects" type="text"/>
                <button className={styles.button} type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;