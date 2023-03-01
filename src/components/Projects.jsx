import React from "react";
import Qr_generator from "../images/Qr_generator.png";
import img3 from "../images/card-3.jpg";
import img4 from "../images/card-4.jpg";
import reactimg from "../images/card-3.jpg"
import weather from "../images/Weather_site.png";
import "./Projects.css";

export default function Projects() {

    return (
        <div className="projects">
            <div className="project-card" id="card-1">
                <img src={weather} id="card-img" alt="project_img" />
                <div id="project-info">
                    <h1 id="project-name">Weather Site</h1>
                    <h2 id="h2">project descrbtion</h2>
                    
                    
                    <p id="project-desc">Using a public weather API, a weather site provides location-based information such as minimum and maximum temperature, cloud cover, clear sky conditions, and humidity. This information is updated regularly and can be accessed through the website.</p>
                    <p id="tech-used-p">Tech Used</p>
                    <div id="tech-used">

                        <img id="tech-imgs" alt="React" src={reactimg}/>
                        <img id="tech-imgs" alt="React" src={reactimg}/>
                        <img id="tech-imgs" alt="React" src={reactimg}/>
                        <img id="tech-imgs" alt="React" src={reactimg}/>
                        <img id="tech-imgs" alt="React" src={reactimg}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
