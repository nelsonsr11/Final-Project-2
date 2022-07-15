import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");

  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate("/");
  };

  const check = (e) => {
    if (password.length < 6) {
      e.preventDefault();
      setStatus("Password too short");
    } else {
      navigateCreate();
    }
  };
  return (
    <div className="login1">
      <div className="text1">
        <h1>Log In</h1>
      </div>
      <input
        className="email"
        type="text"
        placeholder="Email"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        className="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <Link to="/">
        <button type="submit" class="button22" onClick={check}>
          LOGIN
        </button>
      </Link>
      <p>{status}</p>
    </div>
  );
};

export default LogIn;
