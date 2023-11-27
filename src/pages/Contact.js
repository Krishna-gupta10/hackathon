import React from 'react';
import '../components/css/Auth.css'

export default function Contact() {

  return (
    <>
      <div className="container my-3" style={{ width: '30%', fontSize: '20px' }}>
        <h3 className="mb-3"> Contact Form</h3>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn loginbtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
