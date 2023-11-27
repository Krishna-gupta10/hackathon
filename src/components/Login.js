import React, { useState } from 'react';


import './css/Auth.css'
function Login() {
 const [signup, setSignup] = useState(true);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [loginError, setLoginError] = useState('');

 const handleSubmit = (e) => {
 };

 const handleLogin = (e) => {
 };

 return (
   <>
      <h2 class="heading">Create New Customer Account</h2>
      <div class="big">
         <div/>
      <div class="container">
         <form>
               <br/>
               <h5>Sign-in Information</h5>
               <hr/>
               <div class="form-group">
                  <input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
               </div>
               <div class="form-group">
                     <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
               </div>
   
               <div class="form-group">
                     <button type="submit" class="btn btn-success btn-lg btn-block">Login Now</button>
               </div>
            </form>
            <div class="text-center">Already have an account? <a href="#">Sign in</a></div>
         </div>
</div>
 </>
 );
}

export default Auth;