import React from 'react';

import NavItems from './NavItems/NavItems';
import Logo from '../Logo/Logo';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import styles from './NavBar.module.css';

const navBar = (props) => (
    <header className={styles.NavBar}>
        <Logo />
        <nav className={styles.DesktopOnly}><NavItems /></nav>
        <DrawerToggle toggleSideDrawer={props.toggles} drawerState={props.show}/>
    </header>
)

export default navBar;