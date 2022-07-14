import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Shoes.css";

const Shoes = () => {
  const [shoesArr, setShoesArr] = React.useState([]);
  const [shoesName, setShoesname] = React.useState("");
  const [shoesColorway, setShoescolorway] = React.useState("");
  const [shoesBrand, setShoesBrand] = React.useState("");
  const [shoesSku, setShoesSku] = React.useState("");

  //   const [shoesName, setShoesname] = React.useState("");

  const options = {
    method: "GET",
    url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
    params: {
      limit: "100",
      name: shoesName,
      colorway: shoesColorway,
      sku: shoesSku,
      brand: shoesBrand,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_SNEAKERS_API,
      "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
    },
  };
  //   React.useEffect(function () {
  //     getShoes();
  //   }, []);

  const getShoes = async (e) => {
    e.preventDefault();

    const newObj = {};

    Object.keys(options.params).forEach((key) => {
      if (options.params[key]) {
        newObj[key] = options.params[key];
      }
    });
    console.log("new obj", newObj);

    options.params = newObj;

    console.log("submit", shoesBrand, shoesColorway, shoesName);
    let response = await axios.request(options);
    console.log(response.data);
    setShoesArr(response.data.results);
  };
  return (
    <div>
      <form onSubmit={getShoes} className="shoes1">
        <h1>SNEAKERS</h1>
        {/* <label>Name: </label> */}
        <div className="all">
          <input
            className="name-bar"
            type="text"
            placeholder="Shoe's Name"
            onChange={(e) => setShoesname(e.target.value)}
          />
          <button>Go</button>
        </div>
        <br />
        <h2>FILTERS</h2>
        <div className="additional-info">
          <input
            className="color"
            type="text"
            placeholder="Color"
            onChange={(e) => setShoescolorway(e.target.value)}
          />{" "}
          <input
            className="brand"
            type="text"
            placeholder="Brand"
            onChange={(e) => setShoesBrand(e.target.value)}
          />{" "}
          <input
            className="sku"
            type="text"
            placeholder="Sku"
            onChange={(e) => setShoesSku(e.target.value)}
          />{" "}
        </div>
      </form>
      <div className="shoes11">
        {shoesArr.map((brr) => {
          return (
            <div className="allshoes">
              <Link to={`/shoes/${brr.id}`}>
                <img src={brr.image.thumbnail} />
                <h3>{brr.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shoes;
