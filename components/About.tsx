
const About = () => {
  return (
    <div className="container mt-5" style={{marginTop : "100px !important"}} id="about" data-aos="fade-up">
        <div className="row justify-content-around ">

            <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6 mt-5">
                <h1 className="fw-bold text ">About Me</h1>
                <p className="" style={{textAlign : "justify"}}>
                I am Akshay Piranav, a final year BTech student at Kamaraj College of Engineering and Technology with a focus on web development. Passionate about creating dynamic web applications, I specialize in Node.js and Python for both front-end and back-end development. I follow Agile development practices, which allow me to deliver high-quality, iterative solutions efficiently. Agile methodologies help me collaborate effectively, adapt to changing requirements, and continuously improve my work. As I complete my degree, I am eager to apply my skills in a professional setting, contribute to innovative projects, and grow as a full stack web developer.

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
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About