import React from 'react'
import './CSS/Loginsignup.css'
function LoginSignup() {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Your Name' />
          <input type="email" name="" placeholder='Email Address' />
          <input type="passsword" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the term of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
