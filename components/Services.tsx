import Link from "next/link";

const Services = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text display-4 fw-bold mb-4" data-aos="fade-up">
        SERVICES & PRICING
      </h1>

      <div className="row">
        {/* Frontend Development */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <div className="card bgg">
            <div className="card-body text-center bg">
              <h4 className="card-title text">Frontend Development</h4>
              <h6 className="card-title">Client Side</h6>
              <p className="card-text ttt">
                Front-end development involves creating the visual and interactive
                aspects of a website or web application. It uses HTML, CSS,
                Bootstrap, React, Vue and JavaScript to build user interfaces,
                ensuring a seamless user experience. Front-end developers focus on
                design, layout, and functionality to make websites responsive and
                visually appealing.
              </p>
              <Link href="/#contact">
                <p className="card-text text-center fw-bold shad border p-2 rounded">
                  RS.2000 - RS.6000
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <div className="card bgg">
            <div className="card-body text-center bg ttt">
              <h4 className="card-title text">Backend Development</h4>
              <h6 className="card-title">Server Side</h6>
              <p className="card-text ttt">
                Back-end development involves building and managing the server-side
                logic, databases, and application architecture. It ensures data
                processing, storage, and communication between the server and
                client. Back-end developers use languages like Python and Node.js to
                create APIs, handle authentication, and maintain server
                functionality.
              </p>
              <Link href="/#contact">
                <p className="card-text text-center fw-bold shad border p-2 rounded">
                  RS.6000 - RS.15000
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Full-Stack Development */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <div className="card bgg">
            <div className="card-body text-center bg">
              <h4 className="card-title text">Full-Stack Development</h4>
              <h6 className="card-title">Both Client & Server Side</h6>
              <p className="card-text ttt">
                Full-stack development involves working on both the front-end and
                back-end of a web application. Full-stack developers handle
                everything from designing user interfaces to managing databases and
                server logic. They use a combination of technologies like HTML, CSS,
                JavaScript, and back-end languages to create complete, functional
                applications.
              </p>
              <Link href="/#contact">
                <p className="card-text text-center fw-bold shad border p-2 rounded">
                  RS.8000 - RS.15000
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* API Development */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <div className="card bgg">
            <div className="card-body text-center bg">
              <h4 className="card-title text">API Development</h4>
              <h6 className="card-title">RestAPI</h6>
              <p className="card-text ttt">
                API development involves creating and managing application programming
                interfaces that allow different software systems to communicate. It
                includes designing endpoints, handling requests and responses, and
                ensuring secure data exchange. API developers use protocols like REST
                or GraphQL and languages like Python(Django, Flask, FastAPI), or
                Node.js to build efficient, scalable interfaces.
              </p>
              <Link href="/#contact">
                <p className="card-text text-center fw-bold shad border p-2 rounded">
                  RS.1000 - RS.3000
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* E-Commerce Development */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <div className="card bgg">
            <div className="card-body text-center bg">
              <h4 className="card-title text">E-Commerce Development</h4>
              <h6 className="card-title">Build a Platform</h6>
              <p className="card-text ttt">
                E-commerce development involves creating online stores and platforms
                for buying and selling products or services. It includes designing
                user-friendly interfaces, implementing secure payment gateways, and
                managing product catalogs and customer data. E-commerce developers
                use technologies like React and back-end systems to build responsive,
                secure, and scalable shopping experiences.
              </p>
              <Link href="/#contact">
                <p className="card-text text-center fw-bold shad border p-2 rounded">
                  RS.12000 - RS.24000
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Software Testing */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <div className="card bgg">
            <div className="card-body text-center bg">
              <h4 className="card-title text">Software Testing</h4>
              <h6 className="card-title">Enhance the Application</h6>
              <p className="card-text ttt">
                Software testing involves evaluating and verifying that a software
                application meets specified requirements and functions correctly. It
                includes identifying bugs, ensuring performance, and validating that
                the software is user-friendly and secure. Testing methods include
                manual testing, automated testing, unit testing, integration
                testing, and user acceptance testing (UAT).
              </p>
              <Link href="/#contact">
                <p className="card-text text-center fw-bold shad border p-2 rounded">
                  RS.3000 - RS.4000
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials Title */}
        <div className="col-12 mt-4 mb-2">
          <h2
            className="text-center text display-5 fw-bold"
            data-aos="fade-up"
          >
            CLIENT TESTIMONIALS
          </h2>
        </div>

        {/* TamilFoods Testimonial */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <div className="card bgg">
            <div className="card-body text-center bg">
              <h4 className="card-title text">TamilFoods</h4>
              <h6 className="card-title">Multi Millet Based Company</h6>
              <p className="card-text ttt">
                "Working with the team was an amazing experience. They developed a
                beautiful and user-friendly website for our millet-based product. It’s helped us reach more customers."
              </p>
              <p className="card-text fw-bold shad border p-2 rounded">
                — Tamil Selvi, Owner
              </p>
            </div>
          </div>
        </div>

        {/* Kavitha Crackers Testimonial */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <div className="card bgg">
            <div className="card-body text-center bg">
              <h4 className="card-title text">Kavitha Crackers</h4>
              <h6 className="card-title">Cracker Business</h6>
              <p className="card-text ttt">
                "The billing system and dashboard they developed has streamlined
                our operations. We can now track inventory and sales with ease.
                Truly a game-changer for our business."
              </p>
              <p className="card-text fw-bold shad border p-2 rounded">
                — Ramesh Babu, Owner
              </p>
            </div>
          </div>
        </div>

        {/* 99 Crackers Testimonial */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <div className="card bgg">
            <div className="card-body text-center bg">
              <h4 className="card-title text">99 Crackers</h4>
              <h6 className="card-title">Cracker Business</h6>
              <p className="card-text ttt">
                "We wanted to move our cracker business online, and they delivered
                an e-commerce website with database integration. Now customers can
                place orders easily, and we manage everything."
              </p>
              <p className="card-text fw-bold shad border p-2 rounded">
                — Ramesh Babu, Owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
