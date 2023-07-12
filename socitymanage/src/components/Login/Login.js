import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom';
import './Login.css'

import { login } from '../../actions/auth'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const initialState = { username: '', password: '' }

const Login = () => {
    const dispatch = useDispatch()
    // const history = useHistory();
  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState({})
  const count = useRef(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
        
    const error = await dispatch(login(formData))
    if (error === undefined) {
      navigate('/')
      enqueueSnackbar('Logged In Successfully', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    }
    if (error === "User doesn't exist") {
      enqueueSnackbar('Please Enter Your Correct Credentials', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
      console.log(error)
    }
  }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
   
 
  // useEffect(() => {
  //   if (localStorage.getItem('LoginError')) {
  //     // history.push('/');
  //     enqueueSnackbar('Please Enter Your Correct Credentials', {
  //       variant: 'error',
  //       anchorOrigin: {
  //         vertical: 'top',
  //         horizontal: 'center',
  //       },
  //     });
  //     localStorage.removeItem('LoginError');
  //   }
  // }, [error]);


    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <SnackbarProvider />
        <div className="login-box">
          <div className="dim-bg"></div>
          <h2>GCU Society Hub</h2>
          <input
            className="input-field"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            className="input-field"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button className="submit-btn" type="submit">
            Log In
          </button>
        </div>
      </form>
    );
}

  export default Login