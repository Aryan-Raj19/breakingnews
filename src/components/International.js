import React from "react";
import { Link } from "react-router-dom";

const International = () => {
  return (
    <div className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        to="/"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{color: "#cd4747", marginRight: "2vw"}}
      >
        Country
      </Link>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <Link className="dropdown-item" to="/india" >
            India
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/america" >
            US
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/japan" >
            Japan
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/australia" >
            Australia
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/england" >
            England
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/russia" >
            Russia
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/canada" >
            Canada
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/china" >
            China
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/arab" >
            UAE
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/france" >
            France
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default International;
