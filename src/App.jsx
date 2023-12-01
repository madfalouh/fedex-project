import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
