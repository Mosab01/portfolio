import React from "react";
import "./Projects.css";

import weather from "../images/Weather_site.png";
import qr_generator from "../images/Qr_generator.png"
import react_icon from "../svgs/react_icon.svg";
import github_icon from "../svgs/github_icon.svg";
import html_icon from "../images/html_icon.png";
import css_icon from "../svgs/css_icon.svg";
import js_icon from "../svgs/js_icon.svg";

export default function Projects() {

    return (
        <div className="projects">
            <div className="project-card" id="card-1">
                <div id="project-image">
                    <img src={weather} id="card-img" alt="project_img" />
                    <div id="img-mask"></div>
                </div>

                <div id="project-info">
                    <h1 id="project-name">Weather Site</h1>
                    <h2 id="h2">project descrbtion</h2>


                    <p id="project-desc">Using a public weather API, a weather site provides location-based information such as minimum and maximum temperature, cloud cover, clear sky conditions, and humidity. This information is updated regularly and can be accessed through the website.</p>
                    <p id="tech-used-p">Tech Used</p>
                    <div id="tech-used">
                        <img id="tech-imgs" alt="React" src={react_icon} />
                        <img id="tech-imgs" alt="React" src={github_icon} />
                        <img id="tech-imgs" alt="React" src={js_icon} />
                        <img id="tech-imgs" alt="React" src={css_icon} />
                        <img id="tech-imgs" alt="React" src={html_icon} />
                    </div>
                    <div id="project-btns">
                        <a href="https://github.com/Mosab01/weather" target="_blank" >Github</a>
                        <a>Live Demo</a>

                    </div>
                </div>

            </div>

            <div className="project-card" id="card-2">
                <div id="project-image">
                    <img src={qr_generator} id="card-img" alt="project_img" />
                    <div id="img-mask"></div>
                </div>

                <div id="project-info">
                    <h1 id="project-name">Qr Generator</h1>
                    <h2 id="h2">project descrbtion</h2>


                    <p id="project-desc">Using a public weather API, a weather site provides location-based information such as minimum and maximum temperature, cloud cover, clear sky conditions, and humidity. This information is updated regularly and can be accessed through the website.</p>
                    <p id="tech-used-p">Tech Used</p>
                    <div id="tech-used">
                        <img id="tech-imgs" alt="React" src={react_icon} />
                        <img id="tech-imgs" alt="React" src={github_icon} />
                        <img id="tech-imgs" alt="React" src={js_icon} />
                        <img id="tech-imgs" alt="React" src={css_icon} />
                        <img id="tech-imgs" alt="React" src={html_icon} />
                    </div>
                    <div id="project-btns">
                        <a href="https://github.com/Mosab01/weather" target="_blank" >Github</a>
                        <a>Live Demo</a>

                    </div>
                </div>

            </div>

            <div className="project-card" id="card-1">
                <div id="project-image">
                    <img src={weather} id="card-img" alt="project_img" />
                    <div id="img-mask"></div>
                </div>

                <div id="project-info">
                    <h1 id="project-name">Weather Site</h1>
                    <h2 id="h2">project descrbtion</h2>


                    <p id="project-desc">Using a public weather API, a weather site provides location-based information such as minimum and maximum temperature, cloud cover, clear sky conditions, and humidity. This information is updated regularly and can be accessed through the website.</p>
                    <p id="tech-used-p">Tech Used</p>
                    <div id="tech-used">
                        <img id="tech-imgs" alt="React" src={react_icon} />
                        <img id="tech-imgs" alt="React" src={github_icon} />
                        <img id="tech-imgs" alt="React" src={js_icon} />
                        <img id="tech-imgs" alt="React" src={css_icon} />
                        <img id="tech-imgs" alt="React" src={html_icon} />
                    </div>
                    <div id="project-btns">
                        <a href="https://github.com/Mosab01/weather" target="_blank" >Github</a>
                        <a>Live Demo</a>

                    </div>
                </div>

            </div>

            <div className="project-card" id="card-2">
                <div id="project-image">
                    <img src={weather} id="card-img" alt="project_img" />
                    <div id="img-mask"></div>
                </div>

                <div id="project-info">
                    <h1 id="project-name">Weather Site</h1>
                    <h2 id="h2">project descrbtion</h2>


                    <p id="project-desc">Using a public weather API, a weather site provides location-based information such as minimum and maximum temperature, cloud cover, clear sky conditions, and humidity. This information is updated regularly and can be accessed through the website.</p>
                    <p id="tech-used-p">Tech Used</p>
                    <div id="tech-used">
                        <img id="tech-imgs" alt="React" src={react_icon} />
                        <img id="tech-imgs" alt="React" src={github_icon} />
                        <img id="tech-imgs" alt="React" src={js_icon} />
                        <img id="tech-imgs" alt="React" src={css_icon} />
                        <img id="tech-imgs" alt="React" src={html_icon} />
                    </div>
                    <div id="project-btns">
                        <a href="https://github.com/Mosab01/weather" target="_blank" >Github</a>
                        <a>Live Demo</a>

                    </div>
                </div>

            </div>
        </div>
    )
}
