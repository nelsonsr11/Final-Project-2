import React from "react";

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
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={postMessage}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullname(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit ">Submit Info</button>
        <p>{status}</p>
      </form>
    </div>
  );
};

export default Contact;
