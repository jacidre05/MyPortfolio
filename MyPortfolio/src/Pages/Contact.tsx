import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44hphvk",
        "template_8m974mk",
        e.currentTarget,
        "F6jOUYnRDWmbZKz0n"
      )
      .then(
        (_result) => {
          alert("Message sent successfully!");
          e.currentTarget.reset();
        },
        (_error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Have a question, project idea, or just want to say hi? Fill out the form
          below and I’ll get back to you as soon as possible!
        </p>
      </div>

      <form onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-footer">
        <p>Or reach me directly at: <strong>julie.acidre@gmail.com</strong></p>
        <p>Phone: <strong>+639541954387</strong></p>
      </div>
    </div>
  );
}

export default Contact;
