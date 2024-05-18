// // sign.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './sign.css';

// const SignInSignUpForm = () => {
//     const [signInEmail, setSignInEmail] = useState('');
//     const [signInPassword, setSignInPassword] = useState('');
//     const [signUpEmail, setSignUpEmail] = useState('');
//     const [signUpPassword, setSignUpPassword] = useState('');
//     const [signUpUsername, setSignUpUsername] = useState('');
//     const [signUpUserId, setSignUpUserId] = useState('');
//     const [isSignIn, setIsSignIn] = useState(true);

//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (isSignIn) {
//             console.log('Signing in with:', signInEmail, signInPassword);
//         } else {
//             console.log('Signing up with:', signUpUsername, signUpEmail, signUpPassword, signUpUserId);
//             if (signUpUserId.startsWith('A')) {
//                 navigate('/App1');
//             } else if (signUpUserId.startsWith('C')) {
//                 navigate('/');
//             } else {
//                 alert('User ID must start with "A" or "C"');
//                 setSignUpEmail('');
//                 setSignUpPassword('');
//                 setSignUpUsername('');
//                 setSignUpUserId('');
//                 return;
//             }
//         }
//         setSignInEmail('');
//         setSignInPassword('');
//         setSignUpEmail('');
//         setSignUpPassword('');
//         setSignUpUsername('');
//         setSignUpUserId('');
//     };

//     return (
//         <div className="form-container">
//             <h2 className='heading'>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
//             <form onSubmit={handleSubmit} className='Form'>
//                 {isSignIn ? (
//                     <>
//                         <label>
//                             Username:
//                             <input
//                             className='Input'
//                                 type="text"
//                                 value={signInEmail}
//                                 onChange={(e) => setSignInEmail(e.target.value)}
//                                 required
//                             />
//                         </label>
//                         <br />
//                         <label>
//                             Password:
//                             <input
//                             className='Input'
//                                 type="password"
//                                 value={signInPassword}
//                                 onChange={(e) => setSignInPassword(e.target.value)}
//                                 required
//                             />
//                         </label>
//                     </>
//                 ) : (
//                     <>
//                         <label>
//                             Username:
//                             <input
//                             className='Input'
//                                 type="text"
//                                 value={signUpUsername}
//                                 onChange={(e) => setSignUpUsername(e.target.value)}
//                                 required
//                             />
//                         </label>
//                         <br />
//                         <label>
//                             User ID:
//                             <input
//                             className='Input'
//                                 type="text"
//                                 value={signUpUserId}
//                                 onChange={(e) => setSignUpUserId(e.target.value)}
//                                 required
//                             />
//                         </label>
//                         <br />
//                         <label>
//                             Email:
//                             <input
//                             className='Input'
//                                 type="email"
//                                 value={signUpEmail}
//                                 onChange={(e) => setSignUpEmail(e.target.value)}
//                                 required
//                             />
//                         </label>
//                         <br />
//                         <label>
//                             Password:
//                             <input
//                             className='Input'
//                                 type="password"
//                                 value={signUpPassword}
//                                 onChange={(e) => setSignUpPassword(e.target.value)}
//                                 required
//                             />
//                         </label>
//                     </>
//                 )}
//                 <br />
//                 <button type="submit" className="submit-button">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
//             </form>
//             <p className='p'>
//                 {isSignIn ? "Don't have an account? " : 'Already have an account? '}
//                 <button onClick={() => setIsSignIn(!isSignIn)} className="toggle-button">
//                     {isSignIn ? 'Sign Up' : 'Sign In'}
//                 </button>
//             </p>
//         </div>
//     );
// };

// export default SignInSignUpForm;



// sign.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign.css';
import toast from 'react-hot-toast';


const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phonenumber:'',
        password: '',
      });
    
      const [errors, setErrors] = useState({
        email: '',
        password: '',
        phonenumber: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        let error = '';
        switch (name) {
          case 'email':
            // Email validation using regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            error = !value.match(emailRegex) ? 'Invalid email address' : '';
            break;
          case 'password':
            // Password validation
            const passwordRegex = /^(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()+])[A-Za-z\d!@#$%^&*()+]{8,}$/;
            error = !value.match(passwordRegex) ? 'Password must contain at least 1 capital letter, 1 special character, and be at least 8 characters long' : '';
            break;
          case 'phonenumber':
            // Phone number validation
            const phoneNumberRegex = /^\d{10}$/;
            error = !value.match(phoneNumberRegex) ? 'Invalid phone number' : '';
            break;
          default:
            break;
        }
        setErrors({ ...errors, [name]: error });
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Validate form fields before submission
          if (Object.values(errors).some(error => error !== '')) {
            alert('Please fix validation errors before submitting');
            return;
          }
    
          const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (!response.ok) {
            toast.error("sign up error")
            throw new Error('Failed to create user');
          }else{
             toast.success("signup succesfull")
          }
          const data = await response.json();
          console.log('User created:', data);
          // You can redirect or show a success message here
        } catch (error) {
          console.error('Error creating user:', error.message);
          // You can show an error message here
        }
      };

    return (
        <div className="form-container">
            <h2 className='heading'></h2>
            <form onSubmit={handleSubmit} className='Form'>
            <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
          {errors.phonenumber && <span>{errors.phonenumber}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Create User</button>
            </form>
           
        
        </div>
    );
};

export default SignUpForm;