import React from "react";

import "./styles/Accounts.css";

function Accounts(props) {
  return (
    <div className="summary">
      <div className="name">Summary</div>
      <div>
        <span>Paytm</span>
        <div className="balance">
          <span className="credit">
            <img src="assets/images/inr.svg" alt="rupees" /> 0
          </span>
          <span className="debit">
            <img src="assets/images/inr.svg" alt="rupees" /> 0
          </span>
          <span>
            <img src="assets/images/inr.svg" alt="rupees" /> 0
          </span>
        </div>
      </div>
      <div>
        <span>IOB</span>
        <div className="balance">
          <span className="credit">
            <img src="assets/images/inr.svg" alt="rupees" /> 0
          </span>
          <span className="debit">
            <img src="assets/images/inr.svg" alt="rupees" /> 0
          </span>
          <span>
            <img src="assets/images/inr.svg" alt="rupees" /> 0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
