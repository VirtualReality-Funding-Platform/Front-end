import React,{useState,useEffect} from 'react'

import axios from 'axios'


function Clients(){
    const[state, setUser]=useState('')   

    useEffect(() => {
   

    axios() 
    .get("https://reqres.in/api/users?page=2")
    .then(res=>{
         console.log(res.data)
        setUser(res)
    })
  
    .catch(err=>{console.log(err)})

}, [])
return (
    <div>Hello</div>
)
}
export default Clients