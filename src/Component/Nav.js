import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate();
  let total = useSelector((state) => state.totalCart);

  const handlePlusSymbolHover = (e) => {
    e.target.style.backgroundColor = "#4CAF50";
    // e.target.style.borderRadius = "0"; // Change to square on hover
    e.target.style.color = "#ffffff";
  };

  const handlePlusSymbolLeave = (e) => {
    e.target.style.backgroundColor = "#ffffff";
    e.target.style.borderRadius = "50%"; // Change back to round on leave
    e.target.style.color = "#4CAF50";
  };

return (
    <nav
      className="navbar navbar-expand-lg p-4 align-items-center"
      style={style.nav}
    >
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="#" style={style.navHead}>
          E-commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-light" href="#">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproducts" className="nav-link active text-light" style={style.addProductLink}>
                Add a product <span style={style.plusSymbol}
                 onMouseEnter={handlePlusSymbolHover}
                 onMouseLeave={handlePlusSymbolLeave}>+</span>
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-5 position-relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
              alt="error"
              width={"40rem"}
            onClick={() => navigate("/cart")}
            style={{cursor:"pointer"}}
            /><span className="text-light ml-2">Yashas S</span> 
            {total ? (
              <p
                className="bg-white rounded-circle position-absolute d-flex align-items-center justify-content-center"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  top: "21%",
                  left: "20%",
                }}
              >
                {total}
              </p>
            ) : (
              ""
            )}
            <img
              src="https://cdn-icons-png.flaticon.com/512/236/236832.png"
              alt="error"
              width={"40rem"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
const style = {
  nav: {
    backgroundColor: "#333333",
  },
  navHead: {
    fontFamily: "var(--fontStyle)",
    color: "#f47289",
  },
  addProductLink: {
    display: "flex",
    alignItems: "center",
  },
  plusSymbol: {
    marginLeft: "0.25rem", // Adjust the margin as needed
    fontWeight: "bold", // Optionally make the plus symbol bold
    fontSize: "1.2rem", // Adjust the font size as needed
    color: "white", // Customize the color
    textDecoration: "none", // Remove underline (if needed)
    borderRadius: "50%", // Add a circular background
    padding: "0.15rem 0.35rem", // Adjust padding as needed
    backgroundColor: "green", // Background color
    transition: "background-color 0.3s", // Add a hover transition
  },
  plusSymbolHover: {
    backgroundColor: "#4CAF50", // Background color on hover
    color: "#ffffff", // Text color on hover
  },
};
// #9375b7
