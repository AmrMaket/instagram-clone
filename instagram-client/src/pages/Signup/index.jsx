import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import instaLogoText from '../../assets/instagram-text-logo-83656.png';

const SignupForm = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         username: '',
//         email: '',
//         password: '',
//     });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Perform form submission or validation here
//         console.log('Form submitted:', formData);
//     };

    return (
        <div className='SignupContainer'>
      <div className="signupWrapper">
        <div className="signupRight">
          <div className="signupRightTop">
            <div className="signupRightTopTop">
              <img src={instaLogoText} alt='#' className='instagram-logo'/ >
            </div>
            <div className="signupRightTopForm">
              <form action="" className="signupBox" >
              <input
                //   onChange={(e) => {
                //     setEmail(e.target.value);
                
                  placeholder="Name"
                  type="email"
                  required
                  className="signupInput"
                />
                <input
                //   onChange={(e) => {
                //     setEmail(e.target.value);
                
                  placeholder="email"
                  type="email"
                  required
                  className="signupInput"
                />
                <input
                //   onChange={(e) => {
                //     setUsername(e.target.value);
                //   }}
                  placeholder="Username"
                  type="text"
                  required
                  className="signupInput"
                />
                <input
                //   onChange={(e) => {
                //     setPassword(e.target.value);
                //   }}
                  placeholder="Password"
                  type="password"
                  required
                  minLength="6"
                  className="signupInput"
                />
                <button className="signupButton">Sign Up</button>
              </form>
            </div>
          </div>
          <div className="signupRightBottom">
            <center>
              <span>have an account? </span>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span
                  className="SignUptext"
                //   onClick={() => {
                //     navigate("/login");
                //   }}
                >
                  Log in
                </span>
              </Link>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
                };

export default SignupForm;
