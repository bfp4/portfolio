import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"

import SwitchComponent from "./router/SwitchComponent";

function App() {
  return (
    <Router>
      <SwitchComponent />
    </Router>
  );
}

export default App;
