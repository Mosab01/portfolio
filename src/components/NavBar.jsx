import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

export default function NavBar(){
    return (
        <div className="nav-bar">
                  <Link id="nav-projects" to="app" smooth={true} duration={1000}>Home</Link>

        <Link id="nav-projects" to="card-1" smooth={true} duration={1000} offset={-50}>Projects</Link>
        <Link id="nav-about" to="contact" smooth={true} duration={1000}>About</Link>
      </div>
    );
}