import React from "react";
import arrow from "../images/arrow.svg";
import { Link } from "react-scroll";
import "./Main-page.css";

export default function main_page(){
    return(
        <div className="main-page">

            <div className="hello-main">

                <h1 id="hello">
                    Hello!
                </h1>

                <p id="about-sec">
                    I'm Mosab, a full stack developer, who's passionate about creating beautfull and intreactive UI 
                </p>

                <Link to="contact" smooth={true} duration={800}><img src={arrow} id="scroll-down"/></Link>

            </div>
    </div>
    );
}