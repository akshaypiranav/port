"use client"

import Link from "next/link"
import Script from "next/script"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary barr p-4 " >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" integrity="sha512-p9/nwMrClZrMEZHhYZVR9zgsR6TXjaJQ3O8C0RlKSW3QalF9NTcXZFA44XYsApB5z0eDKUNxjUK4JdGPuA4zYQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />


        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" integrity="sha512-OZZZxkW4+mIkN3xlUpcP1iBr0F+0Ub1d98mR8J1kFYfbS/MTT2hGZvvx0af0Y6NYJ2pxybSttP64d5EovHMc+A==" crossOrigin="anonymous" referrerPolicy="no-referrer"
        />


  <div className="container-fluid">
    <Link className="navbar-brand" href="/">
      <img src="@/../../static/mainLogo.png" alt="logo" width="50" height="50" className="image" /> Portfolio
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link  " aria-current="page" href="/"><i className="fa fa-anchor me-1"   aria-hidden="true"></i>
            Home
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" href="/#about"><i className="fa fa-user-circle me-1"  aria-hidden="true"></i>
            About
            </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link " href="/projects"><i className="fa fa-cubes me-1" aria-hidden="true"></i>
 Projects
        </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " href="/#experience"><i className="fa fa-briefcase me-1" aria-hidden="true"></i>
 Experience
        </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " href="/#skills"><i className="fa fa-superpowers me-1" aria-hidden="true"></i>
 Skills
        </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  href="/pricing"><i className="fa fa-credit-card-alt me-1" aria-hidden="true"></i>

 Pricing
        </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " href="/#contact"><i className="fa fa-address-card me-1" aria-hidden="true"></i>
 Contact
        </Link>
        </li>
        <li className="nav-item">
          <Link className=" nav-link " target="_blank" href="https://github.com/akshaypiranav"><i className="fa fa-github me-1" aria-hidden="true"></i>
 GitHub
        </Link>
        </li>

      </ul>
    </div>
  </div>

</nav>
  )
}

export default Navbar