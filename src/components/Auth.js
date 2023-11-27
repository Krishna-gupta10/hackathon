import React, { useState } from 'react';


import './css/Auth.css'
function Auth() {
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
      <div class="container">
         <div class="signup-form">
            <form action="/examples/actions/confirmation.php" method="post">
    
               <h5>Personal Information</h5>
               <hr/>
               <div class="form-group">
                  <div class="row">
                     <div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required"/></div>
                     <div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
                  </div>        	
               </div>
               <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                  <label class="form-check-label" for="flexCheckChecked">
                  Sign Up for Newsletter
                  </label>
               </div>
               <br/>
               <h5>Address Information</h5>
               <hr/>
               <div class="col"><input type="text" class="form-control" name="companny" placeholder="Company Name" required="required"/></div>
               <br/>
               <input
                     type="tel"
                     name="telphone"
                     placeholder="888 888 8888"
                     pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                     maxlength="10"
                     title="Ten digits code"
                     required
                     />
                  <label class="telephone">
                     Eg : 081 222 2224
                  </label>
               
               <br/>
               <br/>
               <div class="form-floating mb-3">
               <input type="email" class="form-control" id="floatingInput" placeholder="Street Address"/>
               <label for="floatingInput">Street Address</label>
               </div>
               <br/>
               <div class="form-floating mb-3">
               <input type="email" class="form-control" id="floatingInput" placeholder="City"/>
               <label for="floatingInput">City</label>
               </div>
               <br/>
               
               <select class="form-select" aria-label="Default select example">
               <option selected>State/Province</option>
               <option value="1">Maharashtra</option>
               <option value="2">Jammu</option>
               <option value="3">Gujrat</option>
               </select>
               <br/>
               <br/>
               <div class="form-floating mb-3">
               <input type="email" class="form-control" id="floatingInput" placeholder="Zip/Postal Code"/>
               <label for="floatingInput">Zip/Postal Code</label>
               </div>
               <br/>
              
               <select class="form-select" aria-label="Default select example">
               <option selected>Country</option>
               <option value="1">India</option>
               <option value="2">China</option>
               <option value="3">Nepal</option>
               <option value="3">US</option>
               <option value="3">UK</option>
               </select>
               <br/>
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
                     <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
               </div>     
                  
               <div class="form-group">
                  <label class="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
               </div>
               <div class="form-group">
                     <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
               </div>
            </form>
            <div class="text-center">Already have an account? <a href="#">Sign in</a></div>
         </div>
</div>
 </>
 );
}

export default Auth;