import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission or validation here
        console.log('Form submitted:', formData);
    };

    return (
        <div className='signup-container'>
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='fullName'
                    placeholder='Full Name'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <button type='submit'>Sign Up</button>
            </form>
            <p>
                Already have an account? <Link to='/login'>Log in</Link>
            </p>
        </div>
    );
};

export default SignupForm;
