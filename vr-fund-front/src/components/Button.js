import React from 'react'
import Styled from 'styled-components'

const SignupButton = Styled.button`

width:500px;
border: 2px solid black;
color: red;

`
const button = () =>{
    return (
        <SignupButton id="StlSBtn" type ="submit"  placeholder="Submit" />
    )

}
export default SignupButton