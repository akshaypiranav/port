import Link from "next/link"
const Experience = () => {
  return (
<div className="container mt-5" id="experience">
  <h1 className="text-center mb-5 text display-4 fw-bold" data-aos="fade-up">Professional Experience</h1>
  <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center">
    <Link href="https://quantanics.in/" target="_blank">

      <div className="card bgg" style={{ width: "18rem", boxShadow : "0px 0px 70px rgba(0,0,0,0.5)" }} data-aos="fade-up">
        <img src="../static/quantantics.png" className="card-img-top" alt="..." />
        <div className="card-body text-center bg">
          <h4 className="card-title ">Quantantics Tech Serv</h4>
          <h6 className="card-title ">👨🏻‍💻IoT & Python Intern</h6>
          <p className="card-text ttt">
            Learnt About Raspberry PI with Hands On project. During the Internship We get the data of current usage using Raspberry PI, Then we Visulaize that and applied Regression Algorithm to predict the amount of Electricity Consumption for the next Month. 
          </p>
        </div>
      </div>
      </Link>

    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center">
    <Link href="https://phoenixsoftech.in/" target="_blank">

      <div className="card bgg" style={{ width: "18rem", boxShadow : "0px 0px 70px rgba(0,0,0,0.5)" }} data-aos="fade-up">
        <img src="../static/phonix.avif" className="card-img-top" alt="..." />
        <div className="card-body text-center bg">
          <h4 className="card-title ">Phoenix Softech Private</h4>
          <h6 className="card-title ">👨🏻‍💻Django Developer Intern</h6>
          <p className="card-text ttt ">
            Learnt About Django Framework with Hands On Project. During the Internship I learnt and loved Django due to its Vast application also developed an E-Commerce site to purchase Products with Bootstrap, Vanilla JavaScript, Django and Mysql as DB.
          </p>
        </div>
      </div>
      </Link>

    </div>
    

    <div className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center">
    <Link href="https://quarksek.com/" target="_blank">

      <div className="card bgg" style={{ width: "18rem", boxShadow : "0px 0px 70px rgba(0,0,0,0.5)" }}  data-aos="fade-up">
        <img src="../static/qsek.jpg" className="card-img-top" alt="..." />
        
        <div className="card-body text-center bg">
          <h4 className="card-title ">Quarksek Technologies</h4>
          <h6 className="card-title ">👨🏻‍💻Software Developer Intern</h6>
          <p className="card-text ttt">
            During the Internship I learnt about Agile development Life cycle , also learnt about CLI creation, Web development using python as backend and React as Front end tool. Learnt More from our TL with his Experience helps me to with stand in a longer run and development.
            </p>
        </div>
      </div>
      </Link>

    </div>
  </div>
</div>

  )
}

export default Experience
