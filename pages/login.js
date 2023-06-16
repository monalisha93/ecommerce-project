import React, { useState } from 'react';
import { useStateContext } from '../context/StateContext';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const Success = () => {
    const{setLoggedIn,isValidLogin,setUserId,setPassword,userId,password}=useStateContext()
 
const router=useRouter()
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
  
    
  
    if (isValidLogin) {

      // Set login flag in local storage
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');

      // Set logged-in state in context
      setLoggedIn(true);
  
      // Reset the input fields
      setUserId('');
      setPassword('');
  
      // Redirect to protected route
    } else {
      // Handle invalid login credentials
      toast.error('Invalid login credentials');
    }
  };
  

  return (
    <div className="loginBox">
      <div className="containerBox">
       <div className='logo'><img src="https://cdn-icons-png.flaticon.com/128/5768/5768517.png" style={{
          height:"80px",
          width:"80px",      
        }}/> </div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              className="input"
              placeholder="Username"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-field">
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Success;
