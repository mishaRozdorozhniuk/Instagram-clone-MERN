import React, { useState, useContext } from 'react';
import instLogo from '../../components/Header/Instagram_logo.png';
import PropTypes from 'prop-types';
import { AuthContext } from '../../contex';
import './Login.scss';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleLogin = () => {
    setIsAuth(!isAuth);
  };

  const handleShowPassord = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <div className="login">
        <img className="login-logo" src={instLogo} alt="" />
        <form onSubmit={handleSubmit} className="login-form">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
