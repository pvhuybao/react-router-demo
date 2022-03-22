import { BrowserRouter, Link, Routes, Route, useNavigate } from "react-router-dom";

import './App.css';

function App() {
  let navigate = useNavigate();
  
  function handleClick() {
    let location = {
      pathname: '/about'
    }

    navigate(location);
  }

  return (
    <div>
      App<br/>
      <Link to="/home">Home</Link><br/>
      <Link to="/about">About</Link><br/>
      <button onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default App;
