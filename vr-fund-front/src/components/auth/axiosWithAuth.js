import axios from 'axios'
import React from 'react'
import setAuthToken from "../../utils/setAuthToken"


// Build a module that "creates" a new "instance" of the axios object
// - baseURL
// - headers object -> authorization header with the token

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  setAuthToken(token)
  return axios.create({
    baseURL: 'http://localhost:5000/api',
    
    headers: {
      authorization: token
    }
  });
};
