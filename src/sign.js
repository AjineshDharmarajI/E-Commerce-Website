
// // sign.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './sign.css';
// import toast from 'react-hot-toast';
// import Sign_Image from './Login_Img.png'


// const SignUpForm = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         phonenumber:'',
//         password: '',
//       });
    
//       const [errors, setErrors] = useState({
//         email: '',
//         password: '',
//         phonenumber: ''
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         let error = '';
//         switch (name) {
//           case 'email':
//             // Email validation using regex
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             error = !value.match(emailRegex) ? 'Invalid email address' : '';
//             break;
//           case 'password':
//             // Password validation
//             const passwordRegex = /^(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()+])[A-Za-z\d!@#$%^&*()+]{8,}$/;
//             error = !value.match(passwordRegex) ? 
//             '*contain at least 1 capital letter \n' +
//             '*contain at least 1 special character\n' +
//             '*be at least 8 characters long' : '';
//             break;
//           case 'phonenumber':
//             // Phone number validation
//             const phoneNumberRegex = /^\d{10}$/;
//             error = !value.match(phoneNumberRegex) ? 'Invalid phone number' : '';
//             break;
//           default:
//             break;
//         }
//         setErrors({ ...errors, [name]: error });
//         setFormData({ ...formData, [name]: value });
//       };
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           // Validate form fields before submission
//           if (Object.values(errors).some(error => error !== '')) {
//             alert('Please fix validation errors before submitting');
//             return;
//           }
    
//           const response = await fetch('http://localhost:5000/users', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//           });
//           if (!response.ok) {
//             toast.error("sign up error")
//             throw new Error('Failed to create user');
//           }else{
//              toast.success("signup succesfull")
//           }
//           const data = await response.json();
//           console.log('User created:', data);
//           // You can redirect or show a success message here
//         } catch (error) {
//           console.error('Error creating user:', error.message);
//           // You can show an error message here
//         }
//       };

//     return (
//       <div className='sign_full'>
//         <div className='sign'>
//           <div>
//           <img src={Sign_Image} width='400px' height='500px' alt="Login"/>

//           </div>
//         <div className="Sign_form">
//             <h4 className='heading'>User Registeration</h4>
//             <form onSubmit={handleSubmit} className='Form'>
//             <div>
//           <input
//             type="text"
//             placeholder='Username'
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <input
//            placeholder='Email'
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <span className='error_email'>{errors.email}</span>}
//         </div>
//         <div>
//           <input
//           placeholder='Phone Number'
//             type="text"
//             name="phonenumber"
//             value={formData.phonenumber}
//             onChange={handleChange}
//             required
//           />
//           {errors.phonenumber && <span className='error_phone'>{errors.phonenumber}</span>}
//         </div>
//         <div className='ad_password'>
//           <input
//           placeholder='Password'
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           {errors.password && <span className='error_password'>{errors.password}</span>}
//         </div>
//         <div className='sign_button' >
//         <button type="submit">Create User</button>
//         </div>
//             </form>
           
        
//         </div>
//         </div>
//         </div>
//     );
// };

// export default SignUpForm;

import React, { useState } from 'react';
import './sign.css';
import toast from 'react-hot-toast';
import Sign_Image from './Login_Img.png';

const SignUpForm = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phonenumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    phonenumber: '',
  });

  const [showPassword, setShowPassword] = useState(false);

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
        error = !value.match(passwordRegex)
          ? '*contain at least 1 capital letter \n' +
            '*contain at least 1 special character\n' +
            '*be at least 8 characters long'
          : '';
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

  const handleFocus = (e) => {
    e.target.parentNode.classList.add('active');
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.remove('active');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form fields before submission
      if (Object.values(errors).some((error) => error !== '')) {
        alert('Please fix validation errors before submitting');
        return;
      }

      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        toast.error('sign up error');
        throw new Error('Failed to create user');
      } else {
        toast.success('signup successful');
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
    <div className='sign_full'>
      <div className='sign'>
        <div>
          <img src={Sign_Image} width='400px' height='550px' alt='Login' />
        </div>
        <div className='Sign_form'>
          <h4 className='heading'>User Registration</h4>
          <form onSubmit={handleSubmit} className='Form'>
            <div className='input-wrapper'>
              <input
                type='text'
                placeholder=' '
                name='username'
                value={formData.username}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              <label>Username</label>
            </div>
            <div className='input-wrapper'>
              <input
                placeholder=' '
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              <label>Email</label>
              {errors.email && <span className='error_email'>{errors.email}</span>}
            </div>
            <div className='input-wrapper'>
              <input
                placeholder=' '
                type='text'
                name='phonenumber'
                value={formData.phonenumber}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              <label>Phone Number</label>
              {errors.phonenumber && <span className='error_phone'>{errors.phonenumber}</span>}
            </div>
            <div className='input-wrapper'>
              <input
                placeholder=' '
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={formData.password}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              <label>Password</label>
              <span className='toggle-password' onClick={togglePasswordVisibility}>
              {showPassword ?  <i className="fas fa-eye"></i>:<i className="fas fa-eye-slash"></i>}

              </span>
            </div>
            <div className='sig_err'>
            {errors.password && <span className='error_password'>{errors.password}</span>}
            </div>
            <div className='sign_button'>
              <button type='submit'>Create User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
