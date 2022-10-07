import { React, useState } from "react";
import "./styles/InputCard.css";

function InputCard(props) {

  const [localState, setLocalState] = useState({
    title: '',
    amount: '',
    description: '',
    date: '',
  });

  function closeCard(e) {
    if (e.target.className == "input-wrapper") props.onClick();
  }

  function reset() {
    setLocalState({
      title: '',
      amount: '',
      description: '',
      date: '',
    })
  }

  function onChange(e) {
    setLocalState({ ...localState, [e.target.id]: e.target.value })
    console.log(localState);
  }

  return (
    <div className="input-wrapper" onClick={closeCard}>
      <div className="inputCard">
        <div className="heading">
          <div className="close" onClick={props.onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            </svg>
          </div>
          <input
            type="text"
            id="title"
            placeholder="Add Title"
            onChange={onChange}
            value={localState['title']}
          />
          <input type="date" id="date" onChange={onChange} value={localState['date']} />
        </div>
        <div className="main">
          <div className="amount">
            <input
              type="number"
              placeholder="Amount"
              id="amount"
              onChange={onChange}
              value={localState['amount']}
            />
            <div className="btn">
              <div id="credit-btn" className={Number(localState['amount']) >= 0 ? `credit-active` : ``}>Credit</div>
              <div id="debit-btn" className={Number(localState['amount']) < 0 ? `debit-active` : ``}>Debit</div>
            </div>
          </div>
          <div className="description">
            <textarea
              name="description"
              id="description"
              placeholder="Description(optional)"
              onChange={onChange}
              value={localState['description']}
            ></textarea>
            <div className="selection">
              {/* <div className="category">Category</div>
              <ul id="category">
                <li>Grocery</li>
                <li>Recharge and Bill Payment</li>
                <li>Food</li>
                <li>Amazon</li>
                <li>Misc</li>
              </ul> */}

              <div className="type">Type</div>
              <ul id="type">
                <li>Grocery</li>
                <li>Recharge and Bill Payment</li>
                <li>Food</li>
                <li>Amazon</li>
                <li>Misc</li>
              </ul>

              <div className="bank">Bank Account</div>
              <ul id="bank">
                <li>Grocery</li>
                <li>Recharge and Bill Payment</li>
                <li>Food</li>
                <li>Amazon</li>
                <li>Misc</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btn">
          <button id="submit" onClick={props.onSubmit}>Submit</button>
          <button id="reset" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default InputCard;
