import "./App.css";
import arrow from "./arrow.svg";
import img1 from "./images/card.jpg";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <button id="nav-about">Projects</button>
        <button id="nav-projects">Contact</button>
      </div>

      <div className="main-page">
          <div className="hello-main">
          <h1 id="hello">Hello!</h1>
          <p id="about-sec">I'm Mosab, a full stack developer, who's passionate about creating beautfull and intreactive UI </p>
          <img src={arrow} id="scroll-down"/>
          </div>
      </div>

      <div className="projects">
        <div className="project-card">
          <img src={img1} id="project-img"/>
        </div>
      </div>
    </div>
  );
}

export default App;