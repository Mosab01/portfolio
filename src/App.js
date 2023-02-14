import "./App.css";
import Projects from "./components/Projects";
import Main_page from "./components/Main_page";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";


export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main_page/>
      <Projects/>
      <Contact/>

    </div>
  );
}