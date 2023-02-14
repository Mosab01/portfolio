import React from "react";
import img1 from "../images/card-1.jpg";
import img2 from "../images/card-2.jpg";
import img3 from "../images/card-3.jpg";
import img4 from "../images/card-4.jpg";
import "./Projects.css";

export default function Projects() {
    
return(
<div className="projects">
    <div className="project-card" id="card-1">
        <img src={img1} id="card-img" alt="project_img"/>
        <div id="bg-desc"/>
        <p id="project-desc">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                dignissim elementum.
            </p>
    </div>
    
    <div className="project-card" id="card-2">
        <img src={img2} id="card-img" alt="project_img"/>
        <div id="bg-desc"/>
        <p id="project-desc">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                dignissim elementum.
            </p>
    </div>

    <div className="project-card" id="card-3">
        <img src={img3} id="card-img" alt="project_img"/>
        <div id="bg-desc"/>
        <p id="project-desc">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                dignissim elementum.
            </p>
    </div>

    <div className="project-card" id="card-4">
        <img src={img4} id="card-img" alt="project_img"/>
        <div id="bg-desc"/>
        <p id="project-desc">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                dignissim elementum.
            </p>
    </div>
</div>
)}
