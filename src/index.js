import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";


import './style/index.css';
import './style/App.css';
import './style/antd.css';
import App from './app/App';
import About from './app/About';
import Contact from './app/Contact';
import Products from './app/section/Product';
import login from './app/section/login';






const Routers = (

    <Router>
      <div>
      <Route exact  path="/"  component={App} />
      <Route exact  path="/aboutpage" component={About} />
      <Route exact  path="/contact" component={Contact} />
      <Route exact  path="/login" component={login} />
      </div>
    </Router>
  );











ReactDOM.render( Routers , document.getElementById('root'));
