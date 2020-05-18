import React, { Component } from 'react';
import styles from './ExtraInfo.module.css';
// import { Link } from 'react-router-dom';

class ExtraInfo extends Component {

    componentDidMount() {
        document.querySelector('#extraInfo').innerHTML = this.props.children;
    }

    render() {
         

        return (
            <div className={styles.ExtraInfo} id="extraInfo">
                {/* {this.props.info} */}
            </div>
        );
    }
} 


export default ExtraInfo;