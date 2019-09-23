import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import RegisterForm from './Register/RegisterForm';
import LoginForm from './Login/LoginForm'
import Home from '../pages/Home'
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
  </StyledHeader>
 
  )
}

export default Header