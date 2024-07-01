// Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import'./auth.css'
import './img/view.png'

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { email, password });
            console.log('Login successful', response.data);
            // Store authentication token in localStorage or cookies
            localStorage.setItem('accessToken', response.data.accessToken);
            navigate(response.data.isAdmin ? '/admin' : '/user');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className='container'>
        <div className="head">
           <h2>Your Logo</h2>
        </div>
        <div className="body-part">
            <div className="left-side">
                 <div className="text-part">
                      <h1>Sign up to <br /> <span>Lorem ipsum dolor sit</span></h1>
                      <p>
                        If you already have an account <br />
                        You can <a href="/">Register here</a> !
                      </p>
                 </div>
            </div>
            <div className="right-side">
                <div className="login-part">
                  <form onSubmit={handleLogin}>
                    <h1>Log In</h1>
                       <div>
                           <input type="email" value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required />
                       </div>
                       <div>
                           <input type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required />
                           
                       </div>
                        <p>Forgot password ?</p>
                       <button type="submit">Login</button>
                   </form>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default Login;
