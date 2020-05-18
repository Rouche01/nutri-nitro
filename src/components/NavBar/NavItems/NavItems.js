import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
    // <div className={styles.Navbar}>
        <ul className={styles.NavItems}>
            <NavItem link="/about">About</NavItem>
            <NavItem link="/blog">Blog</NavItem>
            <NavItem link="/support">Support</NavItem>
            <Link className={styles.ButtonLink} to="/start-survey">
                <Button  className={styles.Button}>Get Started</Button>
            </Link>
        </ul>
        
    
);

export default navItems;