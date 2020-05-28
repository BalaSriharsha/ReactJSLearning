import React from 'react';
import './Toolbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Toolbar(props){
    return(
        <div>
            <header className="toolbar">
                <nav className="toolbar-navigation">
                    <div className="toolbar-logo">
                        <h1>BalaSriharsha</h1>
                    </div>
                    <div className="toolbar-empty-space"></div>
                    <div className="toolbar-elements">
                        <ul>
                            <li>Passion</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="side-drawer-button">
                        <FontAwesomeIcon icon={faBars} onClick={props.menuShower} style={{textDecoration:'none'}} />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Toolbar;