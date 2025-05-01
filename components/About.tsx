
const About = () => {
  return (
    <div className="container mt-5" style={{marginTop : "100px !important"}} id="about" data-aos="fade-up">
        <div className="row justify-content-around ">

            <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6 mt-5">
                <h1 className="fw-bold text ">About Me</h1>
                <p className="" style={{textAlign : "justify"}}>
                I’m a Cyber Security-driven SDE Intern with a year of experience at Quarksek Technologies, where I contributed to the development of security-focused tools and process automation. Working alongside senior security engineers and penetration testers, I gained hands-on exposure to real-world security challenges and solutions. My role bridged software development and offensive security, allowing me to support secure system design and improve operational efficiency. I'm now looking to transition into a Cybersecurity Engineer role where I can continue strengthening infrastructure and driving security improvements.


                </p>
            </div>
            <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                <div className="text-center">
                <img
                    src="../static/akshay.jpg"
                    className=" dev img-fluid mx-auto d-block"
                    alt="developer"
                    width="400"
                    height="400"
                    style={{boxShadow : "0px 0px 80px rgba(0,0,0,0.3)"}}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
