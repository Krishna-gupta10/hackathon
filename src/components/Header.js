import React from 'react';
import './css/Header.css'
import { useState } from 'react';

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
                            <a href = "/"><img className="mx-3" src="https://info.triadtechnologies.com/hs-fs/hubfs/raw_assets/public/TriadTechnologies_May2022/images/header-logo.png?width=255&height=153&name=header-logo.png" /></a>
                            <ul className="navbar-nav mb-2 mb-lg-0" style={{ height: '100px', padding: '25px 15px' }}>
                                <li className="nav-item dropdown mx-4">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCTS
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Chemical Hose</a></li>
                                        <li><a className="dropdown-item" href="/">Crimpers</a></li>
                                        <li><a className="dropdown-item" href="/">Hose and Fittings</a></li>
                                        <li><a className="dropdown-item" href="/">Piping Systems</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown mx-4">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SERVICES
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Automation Testing</a></li>
                                        <li><a className="dropdown-item" href="/">Engineered Systems</a></li>
                                        <li><a className="dropdown-item" href="/">Kitting & Sub-Assemblies</a></li>
                                        <li><a className="dropdown-item" href="/">Mobile Services</a></li>
                                        <li><a className="dropdown-item" href="/">ParkerStores</a></li>
                                        <li><a className="dropdown-item" href="/">Seal Kits & Custom Packaging</a></li>
                                        <li><a className="dropdown-item" href="/">Service & Repair</a></li>
                                        <li><a className="dropdown-item" href="/">T-Slot Aluminium Extrusions</a></li>
                                        <li><a className="dropdown-item" href="/">Vendor Managed Inventory</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown mx-4">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        RESOURCES
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Line Card</a></li>
                                        <li><a className="dropdown-item" href="/">Blogs</a></li>
                                        <li><a className="dropdown-item" href="/">Catalogs and Literature</a></li>
                                        <li><a className="dropdown-item" href="/">Training Classes</a></li>
                                        <li><a className="dropdown-item" href="/">Markets & Products</a></li>
                                    </ul>
                                </li>
                                <a className="nav-link mx-4" href="/auth"><i className="fa-solid fa-user"></i> SIGN UP/SIGN IN</a>
                                <a className="nav-link mx-4" href="/"><i className="fa-solid fa-cart-shopping"></i> CART</a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div>
                <nav className="navbar navbar-expand-lg bg-gray" style={{ height: '130px' }}>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                            <form className="d-flex">
                                <div className="input-group" style={{ backgroundColor: 'white', padding: '20px 150px' }}>
                                    <input className="form-control mx-2" type="search" placeholder="Look for something..." aria-label="Search" style={{ border: 'none', width: '60%', outline: 'none', boxShadow: 'none' }} />
                                    <button className="btn mx-1 search-btn" type="submit">
                                        <i className="fa-solid fa-magnifying-glass"></i> SEARCH
                                    </button>
                                </div>
                            </form>
                            <a className="nav-link mx-3 quote-btn" style={{ padding: '15px 15px' }} href="/">Request a Quote</a>
                            <a className="nav-link quote-btn" style={{ padding: '15px 15px' }} href="/">Bulk Order</a>
                        </div>
                    </div>
                </nav>
            </div>


        </>
    );
}
