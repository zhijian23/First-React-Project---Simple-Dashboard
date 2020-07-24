import React from "react";
import "./avatar.css";

function Avatar(props){
    return (
        <img className="circle-img" src={props.imgURL} alt="profile_pic"/>
    );
}

export default Avatar