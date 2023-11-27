import React from 'react';
import './css/Header.css'

export default function Header() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link mx-3 hover-box" aria-current="page" href="/">MANUFACTURERS</a>
                                <a className="nav-link mx-3 hover-box" href="/">CAREERS</a>
                                <a className="nav-link mx-3 hover-box" href="/">ABOUT US</a>
                                <a className="nav-link mx-3 hover-box" href="/">LOCATIONS</a>
                                <a className="nav-link mx-3 hover-box" href="/">CONTACT US</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div>
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <img className="mx-3" src="https://info.triadtechnologies.com/hs-fs/hubfs/raw_assets/public/TriadTechnologies_May2022/images/header-logo.png?width=255&height=153&name=header-logo.png" />
                            <ul className="navbar-nav mb-2 mb-lg-0" style={{ height: '100px', padding: '25px 15px' }}>
                                <li className="nav-item dropdown mx-4">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCTS
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown mx-4">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SERVICES
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown mx-4">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        RESOURCES
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                                <a className="nav-link mx-4" href="/">SIGN IN</a>
                                <a className="nav-link mx-4" href="/">CART</a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
