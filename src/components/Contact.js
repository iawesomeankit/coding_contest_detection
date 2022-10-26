import React from "react";
import emailjs from "emailjs-com";
import "./contact.css";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vq0z8lo",
        "template_1v40vi6",
        e.target,
        "VONsIMhdmIp3iSB9p"
      )
      .then((res) => {
        console.log(res);
        alert("Message has been send");
        
      })
      .catch((err) => console.log(err));
  }
  return (
    <section id="contact">
      <div className="cntc">
        <h1 className="txttt">CONTACT FORM</h1>
        <form className="forrm" onSubmit={sendEmail}>
          <label>Name</label>
          <br />
          <input type="text" name="name" />
          <br />
          <label>Email</label>
          <br />
          <input type="email" name="userEmail" />
          <br />
          <label>Message</label>
          <br />
          <textarea name="message" rows="4"></textarea>
          <br />
          <input type="submit" className="sub" value="send" />
          <br />
          <br />
          <br />
          {/* <a href="https://www.linkedin.com/in/ankit-patel-156402212">
            linkdein 
          </a>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
            email
          </a> */}
          <br />
          <br />
          <h4>All rights reserved @2022</h4>
        </form>
      </div>
    </section>
  );
}

export default Contact;