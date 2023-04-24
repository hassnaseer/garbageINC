import React from 'react'
import img7 from '../Images/Images1/photo-1560964645-5296b5099677.avif'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


function Experts() {
    return (
        <>
            <Navbar />
            <br /><br /><br /><br /><br /><br />

            <div class="container">
                <div class="d-lg-flex">
                    <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                        <div class="backgroundEffect"></div>
                        <div class="pic"> <img class=""
                            src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt="" />
                            <div class="date"> <span class="day">01</span> </div>
                        </div>
                        <div class="content">
                            <p class="h-1 mt-4">Truck Dispatching</p>
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
                            src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt="" />
                            <div class="date"> <span class="day">26</span> <span class="month">June</span> <span
                                class="year">2019</span> </div>
                        </div>
                        <div class="content">
                            <p class="h-1 mt-4">Finance And Legal Working Streams Occur Throughout</p>
                            <p class="text-muted mt-3">Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts.</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <div class="btn btn-primary">Read More<span class="fas fa-arrow-right"></span></div>
                                <div class="d-flex align-items-center justify-content-center foot">
                                    <p class="admin">Admin</p>
                                    <p class="ps-3 icon text-muted"><span class="fas fa-comment-alt pe-1"></span>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 mb-lg-0 mb-4">
                        <div class="backgroundEffect"></div>
                        <div class="pic"> <img class=""
                            src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt="" />
                            <div class="date"> <span class="day">26</span> <span class="month">June</span> <span
                                class="year">2019</span> </div>
                        </div>
                        <div class="content">
                            <p class="h-1 mt-4">Finance And Legal Working Streams Occur Throughout</p>
                            <p class="text-muted mt-3">Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts.</p>
                            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <div class="btn btn-primary">Read More<span class="fas fa-arrow-right"></span></div>
                                <div class="d-flex align-items-center justify-content-center foot">
                                    <p class="admin">Admin</p>
                                    <p class="ps-3 icon text-muted"><span class="fas fa-comment-alt pe-1"></span>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div class="mask text-dark d-flex justify-content-center flex-column text-center" >
                    <h1>To work <br />not talk</h1>
                </div>
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
            </div>
            <Footer />
        </>
    )
}

export default Experts
