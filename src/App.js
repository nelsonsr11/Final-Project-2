import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Contact from "./components/Contact";
import Shoes from "./components/Shoes";
import ShoesDetails from "./components/ShoesDetails";
import logotipo from "./images/logo.com.png";
import "./components/Home.css";

function App() {
  return (
    <div className="home">
      <div>
        <nav>
          <Link to="/" className="home2">
            HOME
          </Link>
          <Link to="/shoes" className="shoes">
            SNEAKERS
          </Link>
          <Link to="/contact" className="contact">
            CONTACT
          </Link>
          <Link to="/login" className="login">
            LOGIN
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shoes" element={<Shoes />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/shoes/:_id" element={<ShoesDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
