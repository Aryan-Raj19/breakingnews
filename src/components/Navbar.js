import React from "react";
import International from "./International";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky sticky-top navbar-dark bg-dark`}
        // style={{
        //   backgroundColor: props.mode === "dark" ? "black" : "#aab7c4",
        // }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="logo"
              style={{
                width: "3rem",
                height: "2.5rem",
                marginRight: "1.5vw",
                marginLeft: "-0.6vw",
              }}
              src="news.jpg"
              alt="img"
            />
            {props.title}
          </Link>
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

          </div>
            {/* <div className="form-check form-switch display-font-sizes-5rem mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.changeMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                <p>{props.mode === "dark" ? "Disable" : "Enable"} Dark Mode</p>
              </label>
            </div> */}

          <International/>

          <SearchBar/> 
          
        </div>
      </nav>
    </>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired,
// };

Navbar.defaultProps = {
  title: "Title",
  about: "About",
};
