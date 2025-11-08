import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import ContactImage from "./assets/RandomGamerStand.png"; // ✅ Local image import

function Contact() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44hph", // your EmailJS service ID
        "template_id",   // your EmailJS template ID
        e.currentTarget,
        "user_id"        // your EmailJS user/public key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Left side: form */}
      <div className="form-wrapper">
        <form className="contact-form" onSubmit={sendEmail}>
          <h2>Let’s Bring Your Ideas to Life!</h2>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Right side: image */}
      <div className="contact-image">
        <img src={ContactImage} alt="Contact illustration" />
      </div>
    </div>
  );
}

export default Contact;
