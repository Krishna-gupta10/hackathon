import React from 'react';
import logo from '../images/2.png';
import logo1 from '../images/ss.png';
import logo2 from '../images/Triad & Maverick Header 1.png';
import map from '../images/location.png';

export default function Home() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '500px', marginTop: '100px', overflow: 'hidden' }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={logo} className="d-block w-100" style={{ objectFit: 'cover', height: '75px' }} alt="Image not loading" />
                    </div>
                    <div className="carousel-item">
                        <img src={logo1} className="d-block w-100" style={{ objectFit: 'cover', height: '75px' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={logo2} className="d-block w-100" style={{ objectFit: 'cover', height: '75px', width: '150px' }} alt="..." />
                    </div>
                </div>
            </div>
            <div className="container my-5 text-center">
                <p><b>Maverick Industries, Inc. now operates under the name Triad Technologies</b></p>
            </div>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <img src={map} style={{ height: '100%', maxWidth: '100%' }} alt="Map" />
                </div>
                <div className="mx-5 text-center address">
                    <p><b><big>Triad Technologies Brecksville Branch</big></b></p>
                    <p>(Formerly Maverick Industries, Inc.)</p>
                    <p>5945 West Snowville Road</p>
                    <p>Brecksville, OH 44141</p>
                    <p>Phone: 440-838-5335</p>
                    <p>Fax: 440-838-4082</p>
                </div>
            </div>
        </>
    );
}
