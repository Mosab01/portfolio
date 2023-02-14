import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

export default function NavBar(){
    return (
        <div className="nav-bar">
        <Link id="nav-projects" to="card-1" smooth={true} duration={800}>Projects</Link>
        <Link id="nav-about" to="card-1" smooth={true} duration={800}>About</Link>
      </div>
    );
}