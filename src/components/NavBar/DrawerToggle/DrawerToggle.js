import React from 'react';

import styles from './DrawerToggle.module.css';

const drawerToggle = (props) => {
    let attachedClasses = [styles.DrawerToggle];
    if(props.drawerState) {
        attachedClasses = [styles.DrawerToggle, styles.Change];
    }


    return (
        <div className={attachedClasses.join(' ')} onClick={props.toggleSideDrawer}>
            <div className={styles.Bar1}></div>
            <div className={styles.Bar2}></div>
            <div className={styles.Bar3}></div>
        </div>
    )
}

export default drawerToggle;