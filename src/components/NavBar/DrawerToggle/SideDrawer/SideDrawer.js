import React from 'react';
import NavItems from '../../NavItems/NavItems';
import LogoDark from '../../../Logo/LogoDark';

import styles from './SideDrawer.module.css';
import Wrapper from '../../../../hoc/Wrapper/Wrapper';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if(props.show) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    // let menuStyle = {
    //     width: '0px',
    //     display: 'none'
    // }
    // if(props.show) {
    //     menuStyle = {
    //         width: '280px',
    //         display: 'block'
    //     }
    // }

    return (
        <Wrapper>
            <Backdrop openState={props.show} clicked={props.toggleBackdrop}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <LogoDark />
                </div>
                <nav><NavItems /></nav>
            </div>
        </Wrapper>
    )
}

export default sideDrawer;