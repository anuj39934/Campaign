import React from "react";
import { Glyphicon } from "react-bootstrap";

const Header = props => {
  return (
    <div className="header">
      <div className = "header-container">
        <span className="glyphicon glyphicon-envelope" />
        <span className = "header-title">{props.title}</span>
      </div>
    </div>
  );
};

export default Header;
