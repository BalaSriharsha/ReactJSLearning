import React from 'react';
import './Backdrop.css';

function Backdrop(props){
    return(
        <div className="back-drop" onClick={props.menuCloser}></div>
    )
}

export default Backdrop;