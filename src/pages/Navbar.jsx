import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import "./nav.css";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart.items);
  console.log(cartItem);
  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">Logo</Link>
      </h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        </li>
        <li>
          <Link 
            to="/cart"
            style={{
              position: "relative",
              fontSize: "22px",
              textDecoration: "none",
              color: "black",
              padding: "6px",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
              style={{ height: "20px", width: "20px" }}
            />
            <span
              style={{
                position: "absolute",
                top: "-4px",
                right: "-6px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                fontSize: "12px",
                padding: "2px 6px",
                fontWeight: "bold",
              }}
            >
              {cartItem.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
