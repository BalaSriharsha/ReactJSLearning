import React from 'react';
import './Toolbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

function Toolbar(props){
    return(
        <div>
            <header className="toolbar">
                <nav className="toolbar-navigation">
                    <div className="toolbar-logo">
                        <h1>
                            <Link to="/" className="toolbar-logo-link">BalaSriharsha</Link>
                        </h1>
                    </div>
                    <div className="toolbar-empty-space"></div>
                    <div className="toolbar-elements">
                        <ul>
                            <li>
                                <Link to="/passion" className="toolbar-element-link">Passion</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="toolbar-element-link">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="toolbar-element-link">Contact</Link>
                            </li>
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