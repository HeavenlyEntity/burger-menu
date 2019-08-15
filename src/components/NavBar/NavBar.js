import React, { Component } from "react";
import "./NavBar.scss";

import NavBarItem from "./NavBarItem";

class NavBar extends Component {
    constructor(props){
        super(props);
        this.handleMouseDown =this.handleMouseDown.bind(this);
    }


    handleMouseDown(e) {
        this.props.onHideSideNavigationMenu();
        e.stopPropagation();
    }

    render() {
        let {
            visibleSideMenu,
            onHideSideNavigationMenu
        } = this.props;

        const navBarClass = visibleSideMenu ? "show-menu" : "hide-menu";

        return (
            <div>
                <div onMouseDown={this.handleMouseDown} className={`overlay-container ${navBarClass}`}></div>
                    <div
                    className={`sidebar-container ${navBarClass}`}>
                    <aside className="row">
                        <ul className="sidebar">
                            <NavBarItem
                                path="/about"
                                onHideSideNavigationMenu={onHideSideNavigationMenu}
                                linkText="About us"
                            />
                            <NavBarItem
                                path="/contact"
                                onHideSideNavigationMenu={onHideSideNavigationMenu}
                                linkText="Contact us"
                            />
                        </ul>
                    </aside>
                </div>
            </div>
        )
    }
}

export default NavBar;
