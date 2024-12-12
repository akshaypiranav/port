
const Education = () => {
  return (
    <div className="container mt-5 mb-5" data-aos="fade-up">
        <h1 className="text fw-bold mb-5">Education 🎓</h1>
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6">

                <img src="../static/shn.jpg" width={200} height={200} alt="" className="img-fluid rounded d-block mx-auto" />
                 <h5 className="text-center mt-2">2018 - 2021</h5>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 mt-4">
                <h4 className=" text">SHN Edward Higher Secondary School,<br />Sattur, Virudhunagar, Tamilnadu.</h4>
                <h5 className="">SSLC <strong>- 86.8 %</strong></h5>
                <h5 className="">HSE  <strong className="ms-2">- 88.3 %</strong></h5>
            </div>
        </div>
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6">

                <img src="../static/kamaraj.avif" width={200} height={200} alt="" className=" rounded d-block mx-auto" />
                 <h5 className="text-center mt-2">2021 - Present</h5>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 mt-4">
                <h4 className=" text">Kamaraj College Of Engineering & Technology, <br />Near Virudhunagar, Tamilnadu.</h4>
                <h5 className="">CGPA <strong>- 8.66</strong> (Upto 6th Sem)</h5>
                <h5 className="">GPA  <strong className="ms-2">- 9.17</strong>(Highest)</h5>
            </div>
        </div>
    </div>
  )
}

export default Education
