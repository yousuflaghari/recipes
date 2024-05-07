import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../utils/constants/constants";

const Header = () => {
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    navigate(ROUTES.SEARCH);
  };

  return (
    <div className="header-container">
      <div className="name-tag">
        <div className="shop-name">
          <p className="name">pinch of yum</p>
        </div>
        <div className="link-tag">
          <Link to={ROUTES.DINNER} className="linktag-a">
            DINNER
          </Link>
          <Link to={ROUTES.LUNCH} className="linktag-a">
            LUNCH
          </Link>
          <Link to={ROUTES.DESSERTS} className="linktag-a">
            DESSERT
          </Link>
          <Link to={ROUTES.SNAKS} className="linktag-a">
            SNACK
          </Link>
          <div className="search-icon" onClick={handleSearchIconClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
      <div className="quatation">
        <h4>
          SIMPLE RECIPES MADE FOR{" "}
          <span className="highlight">real, actual, everyday life.</span>
        </h4>
      </div>
    </div>
  );
};

export default Header;
