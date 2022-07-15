import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ShoesDetails.css";

const ShoesDetails = () => {
  const [shoesDet, setShoesDet] = React.useState({});
  const [shoes360, setShoes360] = React.useState([]);
  const [shoes360Index, setShoes360Index] = React.useState(0);
  const params = useParams();

  React.useEffect(() => {
    getShoesDet();
  }, []);

  const options = {
    method: "GET",
    url: `https://the-sneaker-database.p.rapidapi.com/sneakers/${params._id}`,
    headers: {
      "X-RapidAPI-Key": "7f80d56842mshb52da311c570f6fp15a4a9jsn5f23c14c23ba",
      "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
    },
  };

  const getShoesDet = async () => {
    let response = await axios.request(options);
    // console.log(response.data.results[0]);
    setShoesDet(response.data.results[0]);
    if (response.data.results[0].image["360"]) {
      setShoes360(response.data.results[0].image["360"]);
    }
  };
  // console.log(shoes360);

  const passing = () => {
    if (shoes360Index >= shoes360.length - 1) {
      setShoes360Index(0);
    } else {
      setShoes360Index(shoes360Index + 1);
    }
  };
  const passing2 = () => {
    if (shoes360Index <= 0) {
      setShoes360Index(shoes360.length - 1);
    } else {
      setShoes360Index(shoes360Index - 1);
    }
  };

  console.log("passing", shoes360Index);
  return (
    <div className="todo">
      <h2 className="pd">Product Details</h2>
      <div className="all12">
        {/* <div className="image"> */}
        {shoes360.length > 1 && (
          <img height="100" src={shoes360[shoes360Index]} />
        )}
        <div className="button01">
          {shoes360.length > 1 && <button onClick={passing}>&lt;</button>}
          {shoes360.length > 1 && <button onClick={passing2}> &gt;</button>}
        </div>
        <div className="original">
          {shoes360.length < 1 && (
            <img height="100" width="450" src={shoesDet?.image?.original} />
          )}
        </div>
        <div className="list">
          <ul>
            <li>
              {" "}
              <p>Name: {shoesDet.name}</p>
            </li>
            <li>
              {" "}
              <p>Color: {shoesDet.colorway}</p>
            </li>
            <li>
              <p>Brand: {shoesDet.brand}</p>
            </li>
            <li>
              <p>Release Date: {shoesDet.releaseDate}</p>
            </li>
            <li>
              {" "}
              <p>Retail Price: ${shoesDet.retailPrice}</p>
            </li>
            <li>
              {" "}
              <p>Resell Price: ${shoesDet.estimatedMarketValue}</p>
            </li>
            <li>
              {" "}
              <p>SKU: {shoesDet.sku}</p>
            </li>
            {/* <li>
              <p>Story: {shoesDet.story}</p>
            </li> */}
          </ul>
          <h2>Buying Options</h2>
          <div className="buying-options">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${shoesDet?.links?.stockX}`}
            >
              STOCKX
            </a>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${shoesDet?.links?.goat}`}
            >
              GOAT
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ShoesDetails;

/* <a href={`${shoesDet.links.stockX}`}>
  {shoesDet.links && shoesDet.links.stockX}
</a>; */
