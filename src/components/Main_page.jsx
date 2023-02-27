import React from "react";
import arrow from "../images/arrow.svg";
import { Link } from "react-scroll";
import "./Main-page.css";

export default function main_page() {
    return (
        <div className="main-page">

            <div className="hello-main">

                <div id="hello">
                    <p id="hi">
                        Hi, my name is
                    </p>

                    <name id="name">
                        Mosab Khraim.
                    </name>


                    <p id="main-about-sec">
                        I build things for the web.
                    </p>

                    <p id="about-sec">
                        Software engineer specialized in exceptional digital experiences, focused on front-end with growing back-end skills. Aim to be a versatile developer integrating technologies seamlessly for innovative solutions.
                    </p>
                    <Link to="contact" smooth={true} duration={1200}><img src={arrow} id="scroll-down" /></Link>

                </div>


            </div>
        </div>
    );
}