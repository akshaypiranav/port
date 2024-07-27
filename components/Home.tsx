"use client"

import Link from "next/link"


const handleDownload = () => {
  const resumeUrl = '/resume.pdf';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {
  return (
    <div className="container " style={{marginTop : "70px"}} data-aos="zoom-in">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12 text-center">
          <img
            src="../static/akshay.jpg"
            className="akshay img-fluid mx-auto d-block"
            alt="Akshay"
            width="400"
            height="400"
          />
          <h5 className="text-center mt-3 text-danger">⚡engineer.exe⚡</h5>
        </div>
        <div className="col-md-6 col-sm-12 mt-4 text-center">
          <h1 className="display-1 text fw-bold mt-2">I'M AKSHAY PIRANAV</h1>
          <h1 className="fw-bold typing">FULL-STACK DEVELOPER</h1>
          <h6 className="fw-bold my-4">💎 NodeJS / Python 💎</h6>
          <div className="row justify-content-center ">
            
            <div className="col-1">
            <Link href="https://www.linkedin.com/in/akshaypiranavb/" target="_blank" >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
            </div>
            <div className="col-1">
            <Link href="https://www.instagram.com/akshaypiranav/" target="_blank" >
            <i className="fa fa-instagram" aria-hidden="true"></i>            </Link>
            </div>
            <div className="col-1">
            <Link href="mailto:akshaypiranavb@hotmail.com" target="_blank" >
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </Link>
            </div>
            <div className="col-1">
            <Link href="https://github.com/akshaypiranav" target="_blank" >
            <i className="fa fa-github" aria-hidden="true"></i>
            </Link>
            </div>
            <div className="text-center mt-4">
            <button className="btn btn-danger  fw-bold" onClick={handleDownload}><i className="fa fa-download me-1" aria-hidden="true"></i>
            Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
