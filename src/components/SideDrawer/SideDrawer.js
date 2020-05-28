import React from 'react';
import './SideDrawer.css'

function SideDrawer(props){
    let sideDrawerClass = "side-drawer-class";
    if(props.show){
        sideDrawerClass = "side-drawer-class open"
    }
    return(
        <div className={sideDrawerClass}>
            <ul>
                <li onClick={props.menuCloser}>
                    <p>Passion</p>
                </li>
                <li onClick={props.menuCloser}>
                    <p>Projects</p>
                </li>
                <li onClick={props.menuCloser}>
                    <p>Contact</p>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer;