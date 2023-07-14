import React from 'react'

// import img1 from '../Images/Images1/Truck Dispatching.webp'
import img2 from '../Images/Images1/ifta-report-main.webp'
import img from '../Images/Images1/page-trucks-header.webp'
import img15 from '../Images/Images1/Factoring Service.webp'
import img4 from '../Images/Images1/rate negotiation.avif'
import img5 from '../Images/Images1/Safety dot compliance.webp'
import img6 from '../Images/Images1/company formation.webp'
import img7 from '../Images/Images1/Document Management.webp'
import img8 from '../Images/Images1/Dry van.webp'
import img9 from '../Images/Images1/Step desk.webp'
import img10 from '../Images/Images1/Reefer.webp'
import img11 from '../Images/Images1/Flatbed.webp'
import img12 from '../Images/Images1/Poweronly.webp'
import img13 from '../Images/Images1/Hotshot.webp'

import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Whatsappicon from './Whatsappicon';

function Home() {
    return (
        <>
            <Navbar />
            <div class="container my-5 py-5">
                <h1 className='text-center'>How it Works</h1>
                <div class="d-lg-flex">
                    <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                        <div class="backgroundEffect"></div>
                        <div class="pic"> <img class=""
                            src={img2}
                            alt="" />
                            <div class="date"> <span class="day">01</span> </div>
                        </div>
                        <div class="content">
                            <h4 class="h-1 mt-4">Truck Dispatching</h4>
                            <p class="text-muted mt-3">No forced dispatch and hidden payments</p>
                            <p class="text-muted mt-3">Personal dispatcher with 24 / 7 support</p>
                            <p class="text-muted mt-3">From 5% of grosss</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <div class="btn btn-primary">Read More</div>

                            </div>
                        </div>
                    </div>
                    <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                        <div class="backgroundEffect"></div>
                        <div class="pic"> <img class=""
                            src={img7}
                            alt="" />
                            <div class="date"> <span class="day">02</span> </div>
                        </div>
                        <div class="content">
                            <h4 class="h-1 mt-4">Document managment and Paper Work </h4>
                            <p class="text-muted mt-3">Comprehensive coverage</p>
                            <p class="text-muted mt-3">Management of all trucking documents</p>
                            <p class="text-muted mt-3">Years of industry expertise and dedicated personnel</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <div class="btn btn-primary">Read More</div>

                            </div>
                        </div>
                    </div>
                    <div class="card border-0 mb-lg-0 mb-4">
                        <div class="backgroundEffect"></div>
                        <div class="pic"> <img class=""
                            src={img15}
                            alt="" />
                            <div class="date"> <span class="day">03</span>  </div>
                        </div>
                        <div class="content">
                            <h4 class="h-1 mt-4">Factoring Service</h4>
                            <p class="text-muted mt-3">Assistance in selecting a reliable partner</p>
                            <p class="text-muted mt-3">Finding factoring partner according to your needs</p>
                            <p class="text-muted mt-3">Expert support to all our clients</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <div class="btn btn-primary">Read More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><b><br /></b>
            <div class="container">
                <div class="d-lg-flex">
                    <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                        <div class="backgroundEffect"></div>
                        <div class="pic"> <img class=""
                            src={img4}
                            alt="" />
                            <div class="date"> <span class="day">04</span> </div>
                        </div>
                        <div class="content">
                            <h4 class="h-1 mt-4">Rate Negotiation</h4>
                            <p class="text-muted mt-3">FMCSA/DoT requirements and beyond    </p>
                            <p class="text-muted mt-3">Truck ELD requirements for drivers logs</p>
                            <p class="text-muted mt-3">Driver qualification files</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <div class="btn btn-primary">Read More</div>

                            </div>
                        </div>
                    </div>
                    <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                        <div class="backgroundEffect"></div>
                        <div class="pic"> <img class=""
                            src={img5}
                            alt="" />
                            <div class="date"> <span class="day">05</span> </div>
                        </div>
                        <div class="content">
                            <h4 class="h-1 mt-4">Safety dot compliance</h4>
                            <p class="text-muted mt-3">Full transparency for you and your customers</p>
                            <p class="text-muted mt-3">Straightforward route to IFTA Fuel Report Compliance</p>
                            <p class="text-muted mt-3">Support for truckers and motor carriers</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <div class="btn btn-primary">Read More</div>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 mb-lg-0 mb-4">
                        <div class="backgroundEffect"></div>
                        <div class="pic"> <img class=""
                            src={img6}
                            alt="" />
                            <div class="date"> <span class="day">06</span>  </div>
                        </div>
                        <div class="content">
                            <h4 class="h-1 mt-4">Company Formation</h4>
                            <p class="text-muted mt-3">Filing the Certificate of Incorporation</p>
                            <p class="text-muted mt-3">Title for trailer and trailer registration</p>
                            <p class="text-muted mt-3">Help with all the fillings and documents</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <div class="btn btn-primary">Read More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><b><br /></b>
            <div className="container">
                <h2>What is Logity Dispatch</h2>
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/FD2ShcUtLkE" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div ><br />
            <div className="container" style={{ backgroundColor: '#41C1BA' }} >
                {/* <div class="text-center"  >
                    <h1>To work <br />not talk</h1>
                </div><br /> */}
                <div className="row">
                    <div className="col">
                        <h1>5 000+ <br /></h1>
                        Loads Booked

                    </div>
                    <div className="col">
                        <h1> $7 500+ <br /></h1>
                        Average Gross Revenue

                    </div>
                    <div className="col">
                        <h1> 58 <br />  </h1>
                        Mln Lbs Dispatched

                    </div>
                </div>
            </div > <br />
            {/* <div className="container">
                <div class="card text-dark">
                    <img src={img7} class="img-fluid" alt="..." ></img>
                    <h1 class="card-title text-center"><b> To Work <br />not talk</b></h1>
                    <div class="card-text ">
                        <div class="row text-center">
                            <div class="col-md">
                                <h1> <b>5 000+</b></h1>
                                <h5>Loads Booked</h5>
                            </div>
                            <div class="col-md">
                                <h1><b> $7 500+ </b></h1>
                                <h5>Average Gross Revenue</h5>
                            </div>

                        </div></div>

                </div>
            </div><br /> */}
            <div className="container">
                <h1> <b> How To Get Started</b>  </h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        Logity Dispatch's job is to provide the best loads in the market for every driver. Our expert team ensures that drivers from any region and state get high-quality and best-paying loads.
                        <hr />
                        <h5>01-Fill out the form or call us + 1 564-544-6567</h5><br />
                        <h5>02-Upload your MC Authority,W9 Form,abd Certificate of insurance</h5><br />
                        <h5>03-Sign the Dispatch greement completed by our team</h5><br />
                        <h5>04-We are all set.Let's get to work</h5><br />
                    </div>
                    <div className="col">
                        <div className="m-4">
                            <form action="/examples/actions/confirmation.php" method="post">
                                <div className="mb-3">
                                    <label className="form-label" for="inputEmail">Full Name</label>
                                    <input type="full name" className="form-control" id="inputEmail" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" for="inputPassword">Phone number</label>
                                    <input type="password" className="form-control" id="inputPassword" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" for="inputEmail">Email</label>
                                    <input type="full name" className="form-control" id="inputEmail" required />
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="checkRemember" />
                                        <label className="form-check-label" for="checkRemember">I have read and agree to Terms of Service</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-warning">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br />
            <div class="container">
                <h1 className='text-center'>What we Offer</h1>
                <div class="row">
                    <div class="col-md-4">
                        <div class="content"> <Link href="/">
                            <div class="content-overlay"></div> <img class="content-image" src={img8} />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Dry Van</h3>
                            </div>
                        </Link> </div>
                    </div>
                    <div class="col-md-4">
                        <div class="content"> <Link href="#">
                            <div class="content-overlay"></div> <img class="content-image" src={img9} />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Step Deck</h3>

                            </div>
                        </Link> </div>
                    </div>
                    <div class="col-md-4">
                        <div class="content"> <Link href="#">
                            <div class="content-overlay"></div> <img class="content-image" src={img10} />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Reefer</h3>
                            </div>
                        </Link> </div>
                    </div>
                </div>
            </div><br />
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="content"> <Link href="/">
                            <div class="content-overlay"></div> <img class="content-image" src={img11} />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Flatbed</h3>
                            </div>
                        </Link> </div>
                    </div>
                    <div class="col-md-4">
                        <div class="content"> <Link href="#">
                            <div class="content-overlay"></div> <img class="content-image" src={img12} />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Power Only</h3>

                            </div>
                        </Link> </div>
                    </div>
                    <div class="col-md-4">
                        <div class="content"> <Link href="#">
                            <div class="content-overlay"></div> <img class="content-image" src={img13} />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Hotshot   </h3>
                            </div>
                        </Link> </div>
                    </div>
                </div>
            </div>
            <Whatsappicon />
            <Footer />

        </>
    )
}

export default Home
