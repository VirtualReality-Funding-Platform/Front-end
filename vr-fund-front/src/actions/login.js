import axios from  'axios'

export const LOGIN_START = "LOGIN-START";
export const LOGIN_SUCCESS = "LOGIN-SUCCESS";
export const LOGIN_FAILED = "LOGIN-FAILED";

export const login = creds => dispatch =>{
    dispatch({ type: LOGIN_START});
    return axios
    .post
}