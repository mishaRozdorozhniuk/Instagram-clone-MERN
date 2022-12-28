import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instLogo from '../../components/Header/Instagram_logo.png';
import { useDispatch } from 'react-redux';
import { userIsAuth } from '../../store/action';
import './Login.scss';

const Login = () => {
  const [, setEmail] = useState('');
  const [, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let isAuth = false;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userIsAuth(isAuth));
    navigate('');
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper">
      <div className="login">
        <img className="login-logo" src={instLogo} alt="" />
        <form className="login-form">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Phone number, username or email adress"
          />
          <label className="password-label" htmlFor="password">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'password' : 'text'}
              placeholder="Password"
            />
            <span className="show-password" onClick={handleShowPassword}>
              {showPassword ? 'Show' : 'Hide'}
            </span>
          </label>
          <button onClick={handleLogin} type="submit">
            Log in
          </button>
        </form>
        <span className="or">OR</span>
        <span className="login-facebook">
          <a>Log in with Facebook</a>
        </span>
        <span className="login-forgot">
          <a>Forgotten your password?</a>
        </span>
      </div>
      <div className="signup-part">
        <p>Don't have an account?</p>
        <a href="#">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
