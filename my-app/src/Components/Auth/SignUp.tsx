// Signup.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css'

const Signup: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const role = isAdmin ? 'admin' : 'user';

        try {
            // const response = await axios.post('/api/signup', {
            //     fullName,
            //     email,
            //     password,
            //     role
            // });
            
            // console.log('Signup successful', response.data);

            // Redirect based on role
           if (role === 'admin') {
                navigate('/admin');
            } else {
                navigate(`/user`); // Assuming backend returns user id after signup
            }
        } catch (error) {
            console.error('Signup error:', error);
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
                            You can <a href="/login">Login here</a> !
                          </p>
                     </div>
                </div>
                <div className="right-side">
                    <div className="signup-part">
                        <form onSubmit={handleSignup}>
                            <h1>Sign Up</h1>
                           <div>
                               <input type="text" value={fullName} placeholder='Enter your full name' onChange={(e) => setFullName(e.target.value)} required />
                           </div>
                           <div>
                               <input type="email" value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required />
                           </div>
                           <div>
                               <input type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required />
                           </div>
                           <div>
                               <input type="password" value={confirmPassword} placeholder='Confirm your paswword' onChange={(e) => setConfirmPassword(e.target.value)} required />
                           </div>
                           <div className='checkbox'>
                                <label htmlFor="isAdmin">Sign up as admin:</label>
                                <input
                                    type="checkbox"
                                    id="isAdmin"
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                />
                           </div>
                           <button type="submit">Signup</button>
                       </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Signup;
