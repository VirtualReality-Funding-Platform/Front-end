import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import RegisterForm from './Register/RegisterForm';
import LoginForm from './Login/LoginForm'
import Home from '../pages/Home'
import GetClients from './Users/GetClients'
const StyledHeader = styled.header`
text-align:center;
font-size:40px;
`
const Header = (props)=> {
  return (

 <StyledHeader>
    <Link to={"/login"} component={LoginForm}>Login</Link>
    <br></br>
    <Link to={"/"} component={Home} >Home</Link>
    <br></br>
    <Link to={"/register"} component={RegisterForm}>Register</Link>
    <br></br>
    <Link to={"/users/clients"} component={GetClients}>List OF Users</Link>
  </StyledHeader>
 
  )
}

export default Header