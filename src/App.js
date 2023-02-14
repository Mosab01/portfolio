import "./App.css";
import Projects from "./components/Projects";
import Main_page from "./components/Main_page";
import NavBar from "./components/NavBar";


export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main_page/>
      <Projects/>

      <div className="contact">
        <h1>Say Hello</h1>
        <div className="contact-forum">
          <input id="full-name" placeholder="Full Name"/>
          <input id="email-adress" placeholder="Email Adress"/>
          <input id="messege-subject" placeholder="Messege Subject"/>
          <input id="messege" placeholder="Messge"/>

          <button id="send-btn">SEND</button>
        </div>
      </div>
    </div>
  );
}