import React from 'react'
import img from '../Images/Images1/about-header.webp'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Whatsappicon from './Whatsappicon';

function Home() {
    return (
        <>
            <Navbar /><br /><br /><br />
            <div class="jumbotron jumbotron-fluid">
                <img src={img} class="img-fluid" alt="..."></img>
            </div><br />
            <div className="container">
                <h1><b> About <br />
                    the company</b></h1>
                <p>Logity Dispatch provides dispatching services for owner-operators and truck fleets since 2015.</p><br />
                <p>We suggest not only searching for loads but an array of services for drivers and carrier companies including billing, document management, and paperwork, broker and shipper communications, SAFETY DOT compliance, and much more.</p><br />
                <h4>Drive, deliver, earn; we’ll do all the rest for you.</h4><br />
                <p>One of the uncompromising key points for us is transparency. We have clear pricing with no hidden payments or termination fees. We charge our customers from 5 percent to 10 percent from every load depending on the trailer type they are using: dry van, step deck, reefer, flatbed, or hotshot (only 40’ trailers and CDL drivers).</p><br />
                <hr />
            </div>
            <div className="container">
                <h2 className='text-center' >What is Logity Dispatch</h2>
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/FD2ShcUtLkE" title="YouTube video" allowfullscreen></iframe>
                </div>
                <hr />
                <p>We give special attention and priority to all the drivers we are working with. To ensure that you get the highest paying loads, we provide every customer with a dedicated dispatcher and 24 / 7 support. You have the right to change your dispatcher and choose another specialist if you’re not satisfied with them.</p><br />
                <p>Logity Dispatch services include rate negotiation and all the conversation with the brokers and shippers. We make every effort to get the best freight by the highest price for our clients. Though, there is no forced dispatch: drivers may decline any loads if they want to.</p><br />
                <p>Our head office is located in Wilmington, DE, although we dispatch drivers from all across the US.</p><br />
                <p>If you need any additional information about our business, services, or privileges, feel free to contact us:</p>
                <br />
                <div class="container-fluid">
                    <div class="map-responsive">
                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=City Star Shopping Center, 51-B, Main Maulana Shaukat Ali Rd, Township Block 1 Sector B 1 Lahore, Punjab 54770, Pakistan" width="600" height="450" frameborder="0" style={{ border: '0' }} allowfullscreen></iframe>
                    </div>
                </div>
            </div >

            <Whatsappicon />
            <Footer />

        </>
    )
}

export default Home
