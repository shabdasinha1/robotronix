import "./WebDevelopment.css";
import aboutbanner from "../../../assets/img/co-worker.png";


function WebDevelopment() {


  return (
    <>
      <section className="hero-wd" id="home">
        <div className="container">
          <div className="hero-content-wd">
            <h1 className="h1 hero-title">Crafting Next-Gen Web Solutions</h1>
            <p className="hero-text">
              We build scalable, high-performance web applications tailored to
              your business goals and user needs.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
          <div className="hero-banner" />
        </div>
       
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-top">
            <h2 className="h2 section-title">What we do</h2>
            <p className="section-text">
              Elevate your online presence with our
              comprehensive web development services. We
              build responsive, secure, and high-performance
              websites that drive user engagement and
              business growth. Our custom web applications
              are designed to provide seamless user
              experiences, enhancing your brand's digital
              impact.

            </p>
            <ul className="about-list">
              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <ion-icon name="briefcase-outline" />
                  </div>
                  <h3 className="h3 card-title">Front End Technologies</h3>
                  <p className="card-text">
                   HTML, CSS, Bootstrap (3,4,5), JavaScript
 (JQuery, React JS, Angular).
                  </p>
                </div>
              </li>
              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <ion-icon name="chatbubbles-outline" />
                  </div>
                  <h3 className="h3 card-title">Back End Programming</h3>
                  <p className="card-text">
                    PHP (CodeIgniter, Laravel), Java (Spring MVC, 
Spring Boot, Hibernate, JPA, JDBC, JDBC 
Template,), Python (Flask, Django), Node JS, REST 
(APIs) Web Services,  Micro services.
                  </p>
                </div>
              </li>
              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <ion-icon name="rocket-outline" />
                  </div>
                  <h3 className="h3 card-title">
                    Database
                  </h3>
                  <p className="card-text">
                    MySQL, MS SQL, PostgreSQL, Mongo DB, Dynamo 
DB, BigQuery.
                  </p>
                </div>
              </li>
              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <ion-icon name="rocket-outline" />
                  </div>
                  <h3 className="h3 card-title">
                   DevOps/Tools
                  </h3>
                  <p className="card-text">
                     AWS Services (EC2, S3 Bucket, Lambda, RDS), GIT 
hub (Version Control), GIT Labs, CI/CD pipeline, 
Docker, Jira, GCS Services, E2E Cloud etc.
                  </p>
                </div>
              </li>
            
            </ul>
          </div>
          <div className="about-bottom">
            <figure className="about-bottom-banner">
              <img
                src={aboutbanner}
                alt="about banner"
                className="about-banner"
              />
            </figure>
            <div className="about-bottom-content">
              <h2 className="h2 section-title">We’re driven by innovation</h2>
              <p className="section-text">
                From front-end interfaces to backend logic, our team is
                passionate about delivering impactful web solutions that scale.
              </p>
              {/* <button className="btn btn-secondary">Sign up for Free</button> */}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="features" id="features">
        <div className="container">
          <h2 className="h2 section-title">
            Our team is made up of all different backgrounds from all over the
            world
          </h2>
          <p className="section-text">
            Our team is a vibrant tapestry woven from diverse backgrounds and
            cultures from all corners of the globe. This rich variety not only
            enhances our creativity and innovation but also fosters a deeper
            understanding and collaboration among us
          </p>
          <ul className="features-list">
            <li className="features-item">
              <figure className="features-item-banner">
                <img src={featurebanner} alt="feature banner" />
              </figure>
              <div className="feature-item-content">
                <h3 className="h2 item-title">Cover your everyday expenses</h3>
                <p className="item-text">
                  Everyday expenses can quickly add up. That's why it's
                  important to have a plan to cover them
                </p>
              </div>
            </li>
            <li className="features-item">
              <figure className="features-item-banner">
                <img src={coworkerbanner} alt="feature banner" />
              </figure>
              <div className="feature-item-content">
                <h3 className="h2 item-title">
                  We offer low fees that are transparent
                </h3>
                <p className="item-text">
                  We believe in clear and honest pricing. That's why our fees
                  are low and transparent, with no hidden charges or surprises
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section> */}

      {/* <section className="center-section">
        <button
          className="mean-button primary large"
          onClick={() => navigate("/contact-us")}
        >
          Get Started
        </button>
      </section> */}
    </>
  );
}

export default WebDevelopment;
