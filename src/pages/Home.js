import React from 'react';
import logo from '../images/2.png';
import logo1 from '../images/ss.png';
import logo2 from '../images/Triad & Maverick Header 1.png';
import map from '../images/location.png';

export default function Home() {
    const backgroundStyle = {
        backgroundImage: `url('https://s33009.pcdn.co/wp-content/uploads/2023/01/Triad.jpeg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '20vh', 
    };
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
                <p> You will now find all information about Maverick Industries on the website of Triad Technologies</p>
            </div>

            <div className="container-fluid my-3" style={{...backgroundStyle, backgroundColor: '#d0824a', color: 'white', padding: '50px 10%' }}>
                <p className="m-4" style={{backgroundColor: 'rgba(255,255,255,0.70)', color: 'black', padding: '10px 10%', borderRadius: '20px'}}>
                    <b>A leading supplier of industrial, commercial, construction and military products, Maverick Industries was founded in 1991. Customers relied on Maverick to supply superior products, on time, and at a competitive price. Their comprehensive range of quality products and large inventory enabled Maverick to develop long lasting business relationships with customers.

                    <br />
                    <br />

                    Since Triad's acquisition of Maverick Industries, Inc. in 2021, we continue to uphold that same commitment to customer service. Our technical expertise and value-added solutions are an exciting complement to Maverick's product offerings. Former Maverick customers can be assured that the availability of products and service levels will remain the same throughout this transition.

                    <br />
                    <br />

                    Explore our site to see the additional products and services available through Triad Technologies. If you have any questions about the acquisition and name change of Maverick Industries, please do not hesitate to contact us. </b></p>
            </div>

            <div className="container d-flex justify-content-center align-items-center my-3" style={{padding: '30px 20px' }}>
                <div className="text-center">
                    <img src={map} style={{ height: '100%', maxWidth: '100%' }} alt="Map" />
                </div>
                <div className="mx-5 text-center address">
                    <h4 style={{ color: '#e16e26' }}><b><big>Triad Technologies Brecksville Branch</big></b></h4>
                    <h6>(Formerly Maverick Industries, Inc.)</h6>
                    <h6>5945 West Snowville Road</h6>
                    <h6>Brecksville, OH 44141</h6>
                    <h6>Phone: 440-838-5335</h6>
                    <h6>Fax: 440-838-4082</h6>
                </div>
            </div>
        </>
    );
}
