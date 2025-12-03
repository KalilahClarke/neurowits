import React from 'react';
import './JoinOurTeam.css'

const JoinOurTeam = () => {
  return (
    <div className="contact-page">
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="How can we help you?"></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      <div className="alt-contact">
        Or reach us directly at:
        <br />
        <span>info@yourwebsite.com</span>
      </div>
    </div>
  </div>
  );
};

export default JoinOurTeam