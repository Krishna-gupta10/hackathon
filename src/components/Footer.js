import React from 'react';
import './css/Footer.css'
const Footer = () => {
  return (
    <>

      <footer className="bg-body-tertiary text-center">

        <section className="mb-4">
          <img className="mx-3" src="https://info.triadtechnologies.com/hs-fs/hubfs/raw_assets/public/TriadTechnologies_May2022/images/header-logo.png?width=255&height=153&name=header-logo.png" />
        </section>

        <div className="container p-4">

          <section className="mb-4">

            <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>


            <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>


            <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>


            <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>


            <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>


            <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
          </section>



          {/* <section className=""> */}
          {/* <form action="">

                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>



                                <div className="col-md-5 col-12">

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input type="email" id="form5Example24" className="form-control" />
                                        <label className="form-label" for="form5Example24">Email address</label>
                                    </div>
                                </div>
                                <div className="col-auto">

                                    <button data-mdb-ripple-init type="submit" className="btn btn-outline mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form> */}
          {/* </section> */}

          <section className="">

            <div className="row" style={{ justifyContent: 'center' }}>


              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">PRODUCTS</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">Fluid Connector</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Pneumatic</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Hydraulic</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Automation</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Lubrication</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Industrial Profile Services</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">SERVICES</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">Mobile Services
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Engineered Systems</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Repair Services & Fabrication</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Vendor Managed Inventory</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Automation Application Testing</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Kitting & Sub-Assemblies</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Training Classes</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">ABOUT</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">Our History</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Contact Us</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Line Card</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Blog</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Careers</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Credit App</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Web Issues</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">Locations</a>
                  </li>
                </ul>
              </div>


            </div>

          </section>

        </div>



        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>Copyright © 2021-present Triad Technologies, Inc. All rights reserved.<a className="text-reset fw-bold" href=""></a></div>
      </footer>
    </>
  );
};

export default Footer;