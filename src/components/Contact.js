import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
    const confirmationMessage = `Thank you for reaching out, ${name}! Your message has been successfully submitted`;
    alert(confirmationMessage);
  };

  return (
    <div id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title mb-4 text-center">
          Contact <strong className="text-styled">Me</strong>
        </h2>
        <div className="row">
          <div className="col-md-6 text-center py-5">
            <h3>Let's connect!</h3>
            <ul className="list-unstyled">
              <li className="py-2">
                <span className="mx-2 text-styled fs-5">
                  <IoSend />
                </span>
                udhaya06.n@gmail.com
              </li>
              <li className="py-3">
                <span className="mx-2 text-styled fs-4">
                  <MdWifiCalling3 />
                </span>
                9363271971
              </li>
              <li className="pt-4">
                <a href="mailto:udhaya06.n@gmail.com">
                  <span className="text-styled contact-logo mx-3">
                    <SiGmail />
                  </span>
                </a>
                <a href="https://github.com/Udhayabanu97">
                  <span className="text-styled contact-logo">
                    <BsGithub />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/udhaya-n/">
                  <span className="text-styled contact-logo mx-3">
                    <FaLinkedinIn />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            {/* Contact Form - Add your form here */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="text-light my-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control transparent-input text-light"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="text-light mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control transparent-input text-light"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="text-light mb-2">
                  Your Message
                </label>
                <textarea
                  className="form-control transparent-input text-light"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-styled btn-lg contact-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
