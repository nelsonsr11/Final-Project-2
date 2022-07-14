import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home3">
      <h1>Sneaker World</h1>
      <h3>
        Thousands of sneakers with just one click. Dont miss out new realeases
        anymore and discover what the world of sneakers have for you{" "}
      </h3>
      {/* <Link to="/shoes">
        <button type="submit">Discover Sneakers</button>
      </Link> */}
    </div>
  );
};

export default Home;
