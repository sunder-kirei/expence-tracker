import React, { useState } from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import InputCard from "./InputCard";
import Home from "./Home";
import Transactions from "./Transactions";
import "./styles/App.css";

function App(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [addTsx, setAddTsx] = useState(false);

  const [data, setData] = useState([]);

  function handleCollapse() {
    setIsCollapsed(!isCollapsed);
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
      {addTsx && <InputCard onClick={() => setAddTsx(!addTsx)} />}
    </>
  );
}

export default App;
