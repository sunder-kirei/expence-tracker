import React from "react";

import "./styles/Navbar.css";

function Navbar(props) {
  function handlePageChange(e) {
    if (e.target.closest("li") == null) return;
    const li = e.target.closest("ul").children;
    for (let item of li) {
      item.classList.remove("active");
    }
    e.target.closest("li").classList.toggle("active");
  }

  return (
    <nav className={props.isCollapsed ? `collapsed` : ``}>
      <ul onClick={handlePageChange}>
        <li className="active home">
          <img src="assets/images/home.svg" alt="" />
          <span>Home</span>
        </li>
        <li className="transactions">
          <img src="assets/images/transactions.svg" alt="" />
          <span>Transactions</span>
        </li>
        <li className="statistics">
          <img src="assets/images/statistics.svg" alt="" />
          <span>Statistics</span>
        </li>
        <li className="settings">
          <img src="assets/images/settings.svg" alt="" />
          <span>Settings</span>
        </li>
        <li className="help">
          <img src="assets/images/help.svg" alt="" />
          <span>Help</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
