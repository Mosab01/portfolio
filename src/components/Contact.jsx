import React from "react";
import "./Contact.css";

export default function Contact(){
    return(
        <div className="contact">
        <h1>Say Hello</h1>
        <div className="contact-forum">
          <input id="full-name" placeholder="Full Name"/>
          <input id="email-adress" placeholder="Email Adress"/>
          <input id="messege-subject" placeholder="Messege Subject"/>
          <textarea id="messege" placeholder="Messege"></textarea>

          <button id="send-btn">SEND</button>
        </div>
      </div>
    );
}