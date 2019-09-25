import React, { Fragment, useEffect,useState } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    CardImg,
  } from 'reactstrap';


import {withRouter,Link}  from 'react-router-dom'
import Spinner from '../layout/Spinner';
import {data as users} from '../../utils/data'
import PropTypes from 'prop-types'

function Ent(){
    const [user,setEnt] =useState()
    useEffect(() =>{
  
    let ents = setEnt(users)
    },[user])  
    return(
        
        users.map((user)=>{
        
            return(
                <div className="cards">
                <Card  body inverse style={{backgroundColor:'#82e61e',borderColor:'white',border:"2px solid white",width:'50%',heigh:'auto',}}>
              <CardBody inverse color="white">
            
                  <CardTitle>
                 <h1> {user.name}</h1>
                  </CardTitle>
                  <div className="cardId">
                  ID: {user.id}<br/>
                  </div>
                  
                  Projects<br/>

                    {user.projects}
                    <br/>
                   location<br/> 
                   {user.location}
                   <br/>
                   website:,<br/>
                  <Link to= {user.website}>{user.website}</Link>
           </CardBody>
                <CardFooter className="text-xs-center">
                {user.type_id}
                </CardFooter>
              </Card>
</div>
       
       )}))
}



export default     (withRouter )(Ent)