import React, { useState } from 'react';


import './css/Auth.css'
function Auth() {
   const [signup, setSignup] = useState(true);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loginError, setLoginError] = useState('');


   return (
      <>
         <h2 className="text-center my-4">Create New Customer Account</h2>
         <div className="container">
            <div className="signup-form">
               <form action="/examples/actions/confirmation.php" method="post">
                  <h5>Personal Information</h5>
                  <hr />
                  <div className="form-group">
                     <div className="row">
                        <div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required" /></div>
                        <div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" /></div>
                     </div>
                  </div>
                  <div className="form-check">
                     <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                     <label className="form-check-label" for="flexCheckChecked">
                        Sign Up for Newsletter
                     </label>
                  </div>
                  <br />
                  <h5>Address Information</h5>
                  <hr />
                  <div className="col"><input type="text" className="form-control" name="companny" placeholder="Company Name" required="required" /></div>
                  <br />
                  <input
                     type="tel"
                     name="telphone"
                     placeholder="888 888 8888"
                     pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                     maxlength="10"
                     title="Ten digits code"
                     required
                  />
                  <label className="telephone">
                     Eg : 081 222 2224
                  </label>

                  <br />
                  <br />
                  <div className="form-floating mb-3">
                     <input type="email" className="form-control" id="floatingInput" placeholder="Street Address" />
                     <label for="floatingInput">Street Address</label>
                  </div>
                  <br />
                  <div className="form-floating mb-3">
                     <input type="email" className="form-control" id="floatingInput" placeholder="City" />
                     <label for="floatingInput">City</label>
                  </div>
                  <br />

                  <select className="form-select" aria-label="Default select example">
                     <option selected>State/Province</option>
                     <option value="1">Maharashtra</option>
                     <option value="2">Jammu</option>
                     <option value="3">Gujrat</option>
                  </select>
                  <br />
                  <br />
                  <div className="form-floating mb-3">
                     <input type="email" className="form-control" id="floatingInput" placeholder="Zip/Postal Code" />
                     <label for="floatingInput">Zip/Postal Code</label>
                  </div>
                  <br />

                  <select className="form-select" aria-label="Default select example">
                     <option selected>Country</option>
                     <option value="1">India</option>
                     <option value="2">China</option>
                     <option value="3">Nepal</option>
                     <option value="3">US</option>
                     <option value="3">UK</option>
                  </select>
                  <br />
                  <br />
                  <h5>Sign-up Information</h5>
                  <hr />
                  <div className="form-group">
                     <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                  </div>
                  <div className="form-group">
                     <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                  </div>
                  <div className="form-group">
                     <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                  </div>

                  <div className="form-group">
                     <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                  </div>
                  <div className="form-group">
                     <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                  </div>
               </form>
               <div className="text-center">
                  <a href="/Login" style={{color: 'black'}}>Already have an account?</a>
               </div>
            </div>
         </div>
      </>
   );
}

export default Auth;