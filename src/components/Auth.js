import React, { useState } from 'react';

function App() {
 const [signup, setSignup] = useState(true);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [loginError, setLoginError] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // add your frontend logic here
 };

 const handleLogin = (e) => {
    e.preventDefault();
    // add your frontend logic here
 };

 return (
    <div className="App">
      <h1>{signup ? 'Sign Up' : 'Log In'}</h1>
      <form onSubmit={signup ? handleSubmit : handleLogin}>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">{signup ? 'Sign Up' : 'Log In'}</button>
      </form>
      {loginError && <p>{loginError}</p>}
      <button onClick={() => setSignup(!signup)}>{signup ? 'Already have an account? Log in' : 'Don\'t have an account? Sign up'}</button>
    </div>
 );
}

export default App;