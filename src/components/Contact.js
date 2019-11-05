import React from 'react';


function Contact (props) {
  return (
    <div>
      <h3>GET IN TOUCH:</h3>
        <p className="contact"><strong>Email:</strong> <a href="mailto:mf212mf@gmail.com?subject=Mail from Our Site&body=Body-goes-here" target="_blank" >mf212mf@gmail.com</a>
        </p>

        <p className="contact"><strong>Let's Meet:</strong><link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/marief'});return false;">My Schedule</a></p>

        <p className="contact"><strong>Phone:</strong> <a href="tel:6463203548"> 646 320 3548</a></p>
        <form className="container">
          <h4 id="CTA">LET'S TALK!</h4>
          <input id="firstName" type="text" placeholder="First Name" />
          <input id="lastName" type="text" placeholder="Last Name"/>
          <input id="email" type="text" placeholder="Email"/>
          <textarea id="message" type="text" placeholder="Message"></textarea>
          <button id="submit" type="submit">Thanks!</button>
        </form>
    </div>
  )
}

export default Contact;
