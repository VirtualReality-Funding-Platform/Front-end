import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import './App.css';
import {StyledHeader} from './components/Header'
import Register from './pages/Register';
import Home from './pages/Home'
const  App = () => {
  return (
    <Router>
 <StyledHeader>VR Funding</StyledHeader>
<Route exact path="/" component={Home}/>
<Route path="/register" component={Register}/>
 </Router>

  

  );
}

export default App;
