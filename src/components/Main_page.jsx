import React from "react";
import arrow from "../images/arrow.svg";

export default function main_page(){
    return(
        <div className="main-page">
        <div className="hello-main">
        <h1 id="hello">Hello!</h1>
        <p id="about-sec">I'm Mosab, a full stack developer, who's passionate about creating beautfull and intreactive UI </p>
        <img src={arrow} id="scroll-down"/>
        </div>
    </div>
    );
}