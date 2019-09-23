import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Register from './pages/Register';
import Home from './pages/Home'
const  App = () => {
  return (
    <Router>
 <Header/>
<Route exact path="/" component={Home}/>
<Route path="/register" component={Register}/>
 </Router>

  

  );
}

export default App;
