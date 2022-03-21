import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

import './App.css';

function App() {
  return (
    <div>
      App<br/>
      <Link to="/home">Home</Link><br/>
      <Link to="/about">About</Link>
    </div>
  );
}

export default App;
