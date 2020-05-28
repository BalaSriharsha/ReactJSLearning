import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';

function SideDrawer(props){
    let sideDrawerClass = "side-drawer-class";
    if(props.show){
        sideDrawerClass = "side-drawer-class open"
    }
    return(
        <div className={sideDrawerClass}>
            <ul>
                <li onClick={props.menuCloser}>
                    <Link to="/passion" className="side-drawer-link">Passion</Link>
                </li>
                <li onClick={props.menuCloser}>
                    <Link to="/projects" className="side-drawer-link">Projects</Link>
                </li>
                <li onClick={props.menuCloser}>
                    <Link to="/contact" className="side-drawer-link">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer;