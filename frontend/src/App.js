import './App.css';
import React, { useState } from 'react';
import { ReactComponent as Icon2 } from './assets/icon.svg';
import axios from 'axios';

function App() {

 
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    

    

    const handleSubmit = async (e) => {
      e.preventDefault();
      const emailRegex = /^(?!.*#)[^\s@]+@[^\s@]+\.[^\s@]+$/
      ;

      if (!emailRegex.test(email)) {
        setIsValidEmail(false);
      } else {
        // Perform further actions for a valid email
        setIsValidEmail(true);
        // TODO: Add logic for valid email submission
      }

      try {
        const response = await axios.post('/send-email', { email });
  
        if (response.data.success) {
          // Email sent successfully
          alert('Email sent!');
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error('Error:', error.message);
        alert('Failed to send email. Please try again.');
      }
  
      setEmail('');
      
    
    };
    
    
    


  return (
   
    <div className="app">
      
       <div className="App">
      
      <div className='img2'>
      <div className="image-container2"></div>
      </div>
      

            <div className='txt'>
            
           

                    <h1>Stay updated!</h1>
                  <p className="join">Join 60,000+ product managers receiving monthly updates on:</p>
                  <p className='list'>
                      <p className="li">
                        <Icon2 className="mark"/>Product discovery and building what matters </p>
                      <p className="li"> 
                      <Icon2 className="mark"/>Measuring to ensure updates are a success </p>
                      <p className="li"> 
                      <Icon2 className="mark"/>And much more </p>
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className='fle'> <p className='input-txt'>Email address</p>

                    {!isValidEmail &&   <p className='err'> Valid email required</p> }</div>
                          <input type="email"  placeholder="ash@loremcompany.com" value={email} onChange={(e) => setEmail(e.target.value)}required className={!isValidEmail ? 'invalid' : ''}
          style={{ border: !isValidEmail ? '1px solid red' : '', backgroundColor: !isValidEmail ? 'rgb(246, 200, 200)' : '' }} />
                          <button type="submit">Subscribe to monthly news letter</button>
                    </form>

            </div>
            
            <div className='img'>
            <div className="image-container"></div>
           

            </div>
        </div>
        </div>
      

  );
}

export default App;


