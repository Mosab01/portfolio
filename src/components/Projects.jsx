import React from "react";
import img1 from "../images/card.jpg";
import  { useState } from 'react';

export default function Projects() {

    const [isShown, setIsShown] = useState(false);


return(
<div className="projects">
    <div className="project-card" id="card-1"         onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <img src={img1} id="card-img"/>
        {isShown && (
        <p id="card-desc">this is a descrption</p>
      )}


    </div>
    
    <div className="project-card" id="card-2">
        <img src={img1} id="card-img"/>
        <p id="card-desc">this is a descrption</p>
    </div>

    <div className="project-card" id="card-3">
        <img src={img1} id="card-img"/>
        <p id="card-desc">this is a descrption</p>
    </div>

    <div className="project-card" id="card-4">
        <img src={img1} id="card-img"/>
        <p id="card-desc">this is a descrption</p>
    </div>
</div>
)}
