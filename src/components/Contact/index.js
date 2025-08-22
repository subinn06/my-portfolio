import React from "react";
import "./index.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for projects, or just to say hi!</p>
      
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        
        <div className="contact-socials">
          <a href="mailto:subinsuresha@gmail.com"><FaEnvelope /> Email</a>
          <a href="https://www.linkedin.com/in/subin06" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/subinn06" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;