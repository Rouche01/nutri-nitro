import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';
import SideDrawer from '../NavBar/DrawerToggle/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showDrawer: false
    }

    toggleBackdropHandler = () => {
        this.setState({
            showDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showDrawer: !prevState.showDrawer}
        })
    }

    render () {
        return (
            <div>
                <NavBar toggles={this.sideDrawerToggleHandler} show={this.state.showDrawer} />
                <SideDrawer show={this.state.showDrawer} toggleBackdrop={this.toggleBackdropHandler} />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;