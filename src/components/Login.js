import React, { useState } from 'react';
import './css/Auth.css';

function Login() {
   const [signup, setSignup] = useState(true);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loginError, setLoginError] = useState('');

   return (
      <>
         <div className="d-flex justify-content-center">
            <div className="md-4 container1 text-center">
               <form>
                  <br />
                  <h5>Login</h5>
                  <hr />
                  <div className="form-group">
                     <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required="required"
                     />
                  </div>
                  <br />
                  <div className="form-group">
                     <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required="required"
                     />
                  </div>

                  <br />
                  <div className="form-group">
                     <button type="submit" className="btn loginbtn">
                        Login
                     </button>
                  </div>
               </form>
               <br />
            </div>

         </div>
      </>
   );
}

export default Login;
