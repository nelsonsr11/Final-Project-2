import React from "react";
import "../components/Contact.css";
import "../components/Contact.css";

const Contact = () => {
  const [fullnamr, setFullname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");

  const postMessage = (e) => {
    e.preventDefault();
    setFullname("");
    setPhone("");
    setStatus("");
    setEmail("");
    setStatus("Message Sent!");
    setStatus(
      "Thank you for reaching out. We will be intouch with you shortly."
    );
  };
  return (
    <div className="contact11">
      <h1>Contact Us</h1>
      <form className="form1" onSubmit={postMessage}>
        {/* <div className="input11"> */}
        <input
          className="fullname"
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          className="phone"
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* </div> */}
        <button clasName="button2" type="submit ">
          Submit Info
        </button>
        <p>{status}</p>
      </form>
    </div>
  );
};

export default Contact;
