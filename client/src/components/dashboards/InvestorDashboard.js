import React, { Fragment, useEffect,useState} from 'react';
import  axios from 'axios'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {data} from '../../utils/data'
let body = 
{

    
}

const InvestorDashboard = (props)=>{
    const[datas,setData] =useState(data)
   axios.get('http://localhost5000/api/users')
   .then(res=>console.log(res))
    

return(   
    <ul>
       <li key ={datas} >{datas}</li>
    </ul>
)



}

export default connect(
    
  )(InvestorDashboard)