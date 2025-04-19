import Link from "next/link"
const Experience = () => {
  return (
<div className="container mt-5" id="experience">
  <h1 className="text-center mb-5 text display-4 fw-bold" data-aos="fade-up">Professional Experience</h1>
  <div className="row justify-content-center">    

    <div className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center">
    <Link href="https://quarksek.com/" target="_blank">

      <div className="card bgg" style={{ width: "18rem", boxShadow : "0px 0px 70px rgba(0,0,0,0.5)" }}  data-aos="fade-up">
        <img src="../static/qsek.jpg" className="card-img-top" alt="..." />
        
        <div className="card-body text-center bg">
          <h4 className="card-title ">Quarksek Technologies</h4>
          <h6 className="card-title ">👨🏻‍💻SDE-Intern</h6>
          <p className="card-title fw-bold">Apr 2024 - Oct 2024</p>
          <p className="card-text ttt">
         Contributed to the development of a tool to enhance workflow efficiency and automation at QuarkSek as a SDE Intern. Collaborated with the Head of Security Engineering and Lead Automation to optimize workflow processes.
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
          <h6 className="card-title ">👨🏻‍💻SDE & Pen Tester-Trainee</h6>
          <p className="card-title fw-bold">Nov 2024 - Present</p>
          <p className="card-text ttt">
          Developed security and code quality assessment tools to improve workflow automation at QuarkSek as a Trainee. Collaborated with Security Head and Lead Pen Tester. Also assisted as a Web Penetration Tester Trainee.

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
