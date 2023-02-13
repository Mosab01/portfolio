import "./App.css";

import Projects from "./components/Projects";
import Main_page from "./components/Main_page";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <button id="nav-about">Projects</button>
        <button id="nav-projects">Contact</button>
      </div>

      <Main_page/>  

      <Projects/>
 
    </div>
  );
}

export default App;