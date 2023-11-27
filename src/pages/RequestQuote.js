import React from 'react';
import '../components/css/Auth.css'

export default function RequestQuote() {

    return (
        <>
            <div className="container text-center" style={{ width: '50%' }}>
                <form >
                    <h3>Request For Quote</h3>
                    <br />
                    <div className="row mb-4">
                        <div className="col">
                            <div data-mdb-input-init className="form-outline">
                                <label className="form-label" for="form6Example1" placeholder='Name'>Name</label>
                                <input type="text" id="form6Example1" className="form-control" />

                            </div>
                        </div>
                    </div>


                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form6Example3" placeholder='Company Name'>Company name</label>

                        <input type="text" id="form6Example3" className="form-control" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form6Example4" placeholder='Address'>Address</label>

                        <input type="text" id="form6Example4" className="form-control" />
                    </div>


                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form6Example5" placeholder='Email'>Email</label>

                        <input type="email" id="form6Example5" className="form-control" />
                    </div>


                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form6Example6" placeholder='8888888888'>Phone</label>
                        <input type="number" id="form6Example6" className="form-control" />
                    </div>


                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form6Example7">Items & Quantities To Be Quoted</label>

                        <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                    </div>


                    <button data-mdb-ripple-init type="button" className="btn loginbtn btn-block mb-4">Submit Request</button>
                </form>

            </div>

        </>
    );
}