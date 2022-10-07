import React from "react";
import Accounts from "./Accounts";

import MonthCard from "./MonthCard";
import "./styles/Home.css";

function Home(props) {
  return (
    <div
      className={`${
        props.isCollapsed ? "home-page nav-collapsed" : "home-page"
      }`}
    >
      <span>Dashboard</span>
      <div className="dashboard">
        <div>
          <span>
            <img src="assets/images/inr.svg" alt="rupee" />
            42.21
          </span>
          OPENING BALANCE
        </div>
        <div>
          <span>
            <img src="assets/images/inr.svg" alt="rupee" />
            10,261
          </span>
          TOTAL BALANCE
        </div>
        <div>
          <span>
            <img src="assets/images/inr.svg" alt="rupee" />
            10,091.75
          </span>
          TOTAL WITHDRAWAL
        </div>
        <div>
          <span>
            <img src="assets/images/inr.svg" alt="rupee" />
            211.51
          </span>
          CLOSING BALANCE
        </div>
      </div>
      <div className="at-a-glance">At a Glance</div>
      <section>
        <div className="left">
          <MonthCard />
          <MonthCard />
          <MonthCard />
          <MonthCard />
          <MonthCard />
          <MonthCard />
        </div>
        <div className="right">
          <div className="accounts">
            <Accounts />
          </div>
          <div className="stats"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
