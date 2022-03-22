import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Routers } from './routers'

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {
        Routers.map(({ path, component: Component, exact, data }, index) => {
          return (
            <Route path={path} element={Component} />
          )
        })
      }
    </Routes>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  //   <Route path="/" element={<App />} />
  //   <Route path="home" element={<Home />} />
  //   <Route path="about" element={<About />} />
  // </React.StrictMode>,
  document.getElementById('root')
);
