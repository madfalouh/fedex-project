import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/login-back.png";
import  fedEX from './assets/FedEx-Logo.png'
function App() {
  return (
    <>
      <div className="login-container">
        <div className="login-body-container">
          <div className="login-second-section">
             <img  src={fedEX} />
            <div className="input-container">
              {" "}
                <input  placeholder="Username" />{" "}
            </div>
            <div className="input-container">
              {" "}
              <input  className="input-second"  placeholder="Password" type="password"  />{" "}
            </div>

            <div className="input-container-checkbox">
              {" "}
              <input type="checkbox" />
              <label  > Remeber me</label>
            </div>
            <div className="button-container">
              <button>Login </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
