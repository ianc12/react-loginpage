import React from "react";
import Navbar from "./components/index";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from "./pages/login";
import Home from "./pages/home";
import NewUser from "./pages/new_user";
import Account from "./pages/user_info";
import Surprise from "./pages/surprise";
import { render } from "react-dom";

import './App.css'

class App extends React.Component {
  render()
  {
    return (
      <div id="page">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' exact element={<Home />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/user_info' element={<Account/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/surprise' element={<Surprise/>} />
          </Routes>
        </Router>
      </div>
    );
  }
  
}

export default App;
