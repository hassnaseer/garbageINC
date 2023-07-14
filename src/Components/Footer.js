import React from 'react'
import { Link } from 'react-router-dom';
import img from '../Images/logo.png';
import img1 from '../Images/Capture.PNG'
import img2 from '../Images/Capture1.PNG'
import img3 from '../Images/Capture2.PNG'
function Footer() {
    return (
        <>
            <div className="container">
                <div className="elementor-widget-container">
                    <hr style={{ height: '1px', border: 'none', color: '#000', backgroundColor: '#000' }} />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col"> <Link to="/Home"> <img
                        src={img} alt=""
                        style={{ width: '200px' }} /></Link></div>
                    <div className="col">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <h1 style={{ color: '#41C1BA' }}> <b> Discover </b> </h1>
                                <Link className="nav-link" to="/About"> <b> About</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Services"> <b> Services</b></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact-us"> <b> Scrape Rates</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/FAQ"> <b> FAQ</b></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1 style={{ color: '#41C1BA' }}><b>Contact</b></h1>
                        <h4><img src={img1} alt="" /><Link to="tel:+15645446567" className="link-danger">
                        </Link></h4>
                        <h4><img src={img2} alt="" /><Link to="https://chatwith.io/s/642c1d420fe9d" target="_blank"
                            className="link-danger" rel="noreferrer">
                        </Link></h4>
                        <h4><img src={img3} alt="" /> Email: <Link to="mailto: educationhelp721@gmail.com"
                            className="link-danger">
                        </Link></h4>

                    </div>
                    <div className="col">
                        <h1 style={{ color: '#41C1BA' }}> <b> Newsletter</b></h1>
                        <form>
                            <div className="form-group row">

                                <div className="col-sm-10">
                                    <h5>Email address:</h5>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                            </div> <br />
                            <input className="btn btn-warning" type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>

            </div>
            <br />
        </>
    )
}

export default Footer
