import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import InputCard from "./InputCard";
import Home from "./Home";
import Transactions from "./Transactions";
import "./styles/App.css";

import staticData from "../data/data";

function App(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [addTsx, setAddTsx] = useState(false);

  const [data, setData] = useState(
    localStorage.getItem("data") == null
      ? JSON.stringify(staticData)
      : localStorage.getItem("data")
  );

  const currentDate = new Date();

  console.log(currentDate.toString());

  function handleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  function onSubmit(localState) {
    let newData = JSON.parse(data);
    newData.push(localState);

    localStorage.setItem("data", JSON.stringify(newData));

    setData(localStorage.getItem("data"));
    setAddTsx(!addTsx);
  }

  return (
    <>
      <div className="app">
        <Header onClick={handleCollapse} />
        <Navbar isCollapsed={isCollapsed} />
        <Home isCollapsed={isCollapsed} />
        <Transactions />
        <div className="add-transaction" onClick={() => setAddTsx(!addTsx)}>
          <img src="assets/images/add.svg" alt="add transaction" />
        </div>
      </div>
      {addTsx && (
        <InputCard onClick={() => setAddTsx(!addTsx)} onSubmit={onSubmit} />
      )}
    </>
  );
}

export default App;
