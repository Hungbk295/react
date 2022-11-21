import React, { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../services/apiService';
import { Alert } from 'bootstrap';
import { useDispatch } from 'react-redux';
import userReducer from '../../redux/reducer/userReducer';
import { doLogin } from '../../redux/action/userAction';
// import { useDispatch } from 'react-redux';

const Login = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async() => {
      //validate
        let res = await postLogin(email, password);
        console.log("check", res)
        if (res.data.EC === 0) {
            dispatch(doLogin(res))
            navigate('/')
            
        }
        if (res.data.EC !== 0) {
            alert('Error')
    
        }

    }

  return (
    <div className='login-container'>
        <div className='header'>
              <span>Don't have an account yet?</span>
              <button>Sign up</button>
          </div>
          <div className='title col-4 mx-auto'>
              Jaychun
          </div>
          <div className='welcome col-4 mx-auto'>
              Hello, who's this?
          </div>
          <div className='content-form col-4 mx-auto'>
              <div className='form-group'>
                  <label>Email</label>
                  <input type={"email"}
                      className='form-control'
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                  />

              </div>
              <div className='form-group'>
                  <label>Password</label>
                  <input
                      type={"password"}
                      className='form-control'
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                  />

              </div>
              <span className='forgot-password'>Forgot password ?</span>
              <div>
                  <button
                      className='btn btn-primary'
                      onClick={() => handleLogin()}
                  >Login</button>

              </div>
              <div className='text-center'>
                  <span onClick={() => { navigate('/') }}>&#60;&#60; Homepage</span>
              </div>
          </div>
          
    </div>
  )
}

export default Login
