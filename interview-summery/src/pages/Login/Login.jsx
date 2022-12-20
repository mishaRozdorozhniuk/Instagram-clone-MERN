import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import instLogo from '../../components/Header/Instagram_logo.png';
import { AuthContext } from '../../contex';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const { isAuth, setIsAuth } = useContext(AuthContext);
  let navigate = useNavigate()

  const handleLogin = () => {
    setIsAuth(!isAuth);
    navigate('')
  };

  const handleShowPassord = () => {
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
            <span className="show-password" onClick={handleShowPassord}>
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
