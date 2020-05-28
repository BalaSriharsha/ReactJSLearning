import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import "./LikeButton.css";

function LikeButton(){
    const [likeColor,setLikeColor] = React.useState(false)
    let class_name;
    if(likeColor){
        class_name="redd"
    }else{
        class_name="dully"
    }
    return(
        <div className={class_name}>
            <FontAwesomeIcon icon={faHeart} onClick={()=>{setLikeColor(!likeColor)}} />
        </div>
    )
}

export default LikeButton;