import React, { Component } from "react";
import './App.css';
import InvestmentFoam from "./InvestmentForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <p className="container-header">Fee charges</p>
          <div className="main-content">
            <p className="sub-title">Set your amounts</p>
            <InvestmentFoam />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
