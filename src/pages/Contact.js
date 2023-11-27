import React from 'react';

export default function Contact() {
 
    return (
        <>
            <div className="container mt-5">
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
        <button className="btn btn-danger" type="submit">
          Submit
        </button>
      </form>
    </div>
        </>
    );
}
