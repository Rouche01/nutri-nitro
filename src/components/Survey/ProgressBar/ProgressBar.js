import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './ProgressBar.module.css';

class ProgressBar extends Component {
    render() {
        return(
            <ul className={styles.ProgressBar}>
                <li className={styles.active}>Demographics</li>
                <li className={this.props.sectionCounter > 0 && styles.secondStage}>
                    Habits & Behaviours
                </li>
                <li className={this.props.sectionCounter > 1 && styles.thirdStage}>
                    Activity & Nutrition
                </li>
                <li className={this.props.sectionCounter > 2 && styles.lastStage}>
                    Finish
                </li>
            </ul>
        )
    }
} 

const mapStateToProps = state => {
    return {
        sectionCounter: state.sectionCounter
    }
}

export default connect(mapStateToProps)(ProgressBar);