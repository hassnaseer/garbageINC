import React from 'react'

import img1 from '../Images/logo.png'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav class="navbar fixed-top navbar navbar-expand-lg navbar navbar-light" style={{ backgroundColor: '#41C1BA' }}>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/Home">
                        <img class="mx-5" src={img1} width="40" height="40" alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="main_nav">
                        <ul class="navbar-nav">
                            <li class="nav-item active"> <Link class="nav-link" style={{ color: 'white' }} to="/About"> <b> About
                            </b></Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" style={{ color: 'white' }} to="/" data-bs-toggle="dropdown">
                                    <b> Services</b></Link>
                                <ul class="dropdown-menu" style={{ backgroundColor: '#41C1BA' }}>
                                    <li><Link class="dropdown-item" to="/Assignment"> <b> Assignment </b></Link>
                                        <ul class="submenu dropdown-menu" style={{ backgroundColor: '#41C1BA' }}>
                                            <li><Link class="dropdown-item" to="/Computer_Science"> <b> Computer Science
                                            </b></Link></li>
                                            <li><Link class="dropdown-item" to="/Finance"> <b> Finance</b></Link></li>
                                            <li><Link class="dropdown-item" to="/Management"> <b> Management</b> </Link></li>
                                            <li><Link class="dropdown-item" to="/Statistics"> <b> Statistics</b></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link class="dropdown-item" to="/quizez"> <b> Quizez</b> </Link></li>
                                    <li><Link class="dropdown-item" to="/Paper"> <b> Paper</b> </Link></li>
                                    <li><Link class="dropdown-item" to="/Thesis"> <b> Thesis</b> </Link></li>
                                    <li><Link class="dropdown-item" to="/Article"> <b> Article</b> </Link></li>
                                </ul>
                            </li> */}
                            <li class="nav-item active"> <Link class="nav-link" style={{ color: 'white' }} to="/Services"> <b>
                                Services</b></Link>
                            </li>
                            <li class="nav-item active"> <Link class="nav-link" style={{ color: 'white' }} to="/Contact-us"> <b>
                            Scrape Rates</b></Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" style={{ color: 'white' }} to="/" data-bs-toggle="dropdown">
                                    <b> Sample</b></Link>
                                <ul class="dropdown-menu" style={{ backgroundColor: '#41C1BA' }}>
                                    <li><Link class="dropdown-item" to="/Sample_design"> <b> Sample Design</b> </Link></li>
                                    <li><Link class="dropdown-item" to="/Assignment_Solution"> <b> Assignment Solution</b>
                                    </Link></li>
                                </ul>
                            </li> */}
                            <li class="nav-item active"> <Link class="nav-link" style={{ color: 'white' }} to="/FAQ"> <b>
                                FAQ</b></Link></li>
                        </ul>

                        {/* <ul class="navbar-nav ms-auto">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <div class="mx-2">
                                <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                            </div>
                        </ul> */}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
