import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';
// import Wrapper from '../../../hoc/Wrapper/Wrapper';

const navItems = (props) => (
    // <div className={styles.Navbar}>
        <ul className={styles.NavItems}>
            <NavItem link="/">About</NavItem>
            <NavItem link="/">Blog</NavItem>
            <NavItem link="/">Support</NavItem>
            <Button href="#" className={styles.Button}>GET STARTED</Button>
        </ul>
        
    
);

export default navItems;