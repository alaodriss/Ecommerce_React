import React from "react";
import Navbar from "./Components/Navbar";
import NavbarVer from "./Components/Barverticale";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <NavbarVer />
        </Router>
    </>
  );
}

export default App;
