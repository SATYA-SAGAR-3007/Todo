import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="logo.png" alt="booklogo" />
        <div className="nav-items">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}
export default Header;
