// sign.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign.css';

const SignInSignUpForm = () => {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpUserId, setSignUpUserId] = useState('');
    const [isSignIn, setIsSignIn] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSignIn) {
            console.log('Signing in with:', signInEmail, signInPassword);
        } else {
            console.log('Signing up with:', signUpUsername, signUpEmail, signUpPassword, signUpUserId);
            if (signUpUserId.startsWith('A')) {
                navigate('/App1');
            } else if (signUpUserId.startsWith('C')) {
                navigate('/');
            } else {
                alert('User ID must start with "A" or "C"');
                setSignUpEmail('');
                setSignUpPassword('');
                setSignUpUsername('');
                setSignUpUserId('');
                return;
            }
        }
        setSignInEmail('');
        setSignInPassword('');
        setSignUpEmail('');
        setSignUpPassword('');
        setSignUpUsername('');
        setSignUpUserId('');
    };

    return (
        <div className="form-container">
            <h2 className='heading'>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit} className='Form'>
                {isSignIn ? (
                    <>
                        <label>
                            Username:
                            <input
                            className='Input'
                                type="text"
                                value={signInEmail}
                                onChange={(e) => setSignInEmail(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                            className='Input'
                                type="password"
                                value={signInPassword}
                                onChange={(e) => setSignInPassword(e.target.value)}
                                required
                            />
                        </label>
                    </>
                ) : (
                    <>
                        <label>
                            Username:
                            <input
                            className='Input'
                                type="text"
                                value={signUpUsername}
                                onChange={(e) => setSignUpUsername(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            User ID:
                            <input
                            className='Input'
                                type="text"
                                value={signUpUserId}
                                onChange={(e) => setSignUpUserId(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                            className='Input'
                                type="email"
                                value={signUpEmail}
                                onChange={(e) => setSignUpEmail(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                            className='Input'
                                type="password"
                                value={signUpPassword}
                                onChange={(e) => setSignUpPassword(e.target.value)}
                                required
                            />
                        </label>
                    </>
                )}
                <br />
                <button type="submit" className="submit-button">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            </form>
            <p className='p'>
                {isSignIn ? "Don't have an account? " : 'Already have an account? '}
                <button onClick={() => setIsSignIn(!isSignIn)} className="toggle-button">
                    {isSignIn ? 'Sign Up' : 'Sign In'}
                </button>
            </p>
        </div>
    );
};

export default SignInSignUpForm;
