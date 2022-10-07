import React from "react";

import "./styles/Header.css";

function Header(props) {
  return (
    <header>
      <img src="assets/images/menu.svg" alt="menu" onClick={props.onClick} />
      <div className="logo">
        <img src="assets/images/logo.svg" alt="logo" />
        <span>Expence Tracker</span>
      </div>
      <img src="assets/images/user.svg" alt="user" className="user" />
    </header>
  );
}

export default Header;
