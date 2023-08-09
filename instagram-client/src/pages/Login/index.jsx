import React, { useState } from 'react';
import logoPlaystore from '../../assets/logo_play_store.png';
import instaLogoText from '../../assets/instagram-text-logo-83656.png';
import facebook from '../../assets/facebook-logo.png';
import appstore from '../../assets/appstore-image.jpg';
import '../../utilities.css';
import './style.css';
import Signup from '../Signup/index'
import SignupForm from '../Signup/index';
import { Link } from 'react-router-dom';


const Login = () => {
    // const [username, setUserName] = useState[""];
    // const [password, setPassword] = useState[""];

    // const handleLogin = (event) => {
    //     alert("working");
    //     event.preventDefault();
    // } 


    return ( 
        <div className='login-container flex-center flex-column'>
            <div className='box-1'>
                <div className='box-1-logo'>
                    <img src={instaLogoText} alt='#' className='instagram-logo' />
                </div>
                <div className='input-box'>
                    <input 
                    type='text'
                    placeholder='username'
                    // value={username}
                    // onChange={(e) => setUserName(e.target.value)}
                    /> 
                </div>
                <div className='input-box'>
                    <input 
                    type='password'
                    placeholder='Password'
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='login-button-box'>
                    <button className='login-button'>Login</button>
                </div>
                <div className='lines-box'>
                    <div className='line-1'></div>
                    <div className='or-box'>OR</div>
                    <div className='line-2'></div>
                </div>
                <div className='fb-box'>
                    <span>
                        <img src={facebook} alt='#' className='fb-logo' />
                    </span>
                    <p className='fb-link'>Log in with facebook</p>
                </div>
                <div className='forgotten-password-box'>
                    <p className='forgotten-password-link'>Forgotten your password?</p>
                </div>
            </div>
            <div className='box-2'>
                <p>Don't have an account? <Link to="/signup" className='sign-up-span'>Sign up</Link></p>
            </div>
            <div className='get-app-box'>
                <p>Get the app.</p>
            </div>
            <div className='app-store-google-play-box'>
                <img src={logoPlaystore} alt='#' className='app-store-image' />
                <img src={appstore} alt='#' className='google-play-image' />
            </div>
        </div>
     );
}
 
export default Login;