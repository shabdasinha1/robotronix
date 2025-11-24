import React from 'react'

const OurServices = () => {
  return (
    <>
    <div>OurServices</div>
    <header
        id="header"
        className="header d-flex align-items-center position-relative"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <NavLink to="" className="logo d-flex align-items-center">
            <img src={logo} alt="AgriCulture"></img>
          </NavLink>
          <nav id="navmenu" className="navmenu">
            <ul>
              {/* our services */}
              <li className="dropdown">
                <NavLink to="">
                  <span>Our Services +</span>
                </NavLink>
                <ul>
                  <li className="dropdown">
                    <NavLink to="">
                      <span className="subMenu-heading">  </span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">Full-Stack (MEAN,MERN)</NavLink>
                      </li>
                      <li>
                        <NavLink to="">E-Commerce Development</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Progressive Web Apps (PWAs)</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="">
                      <span>Mobile App Development</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">
                          Hybrid Apps (Flutter for iOS/Android)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Full App Development (Frontend, Backend, Database,
                          SQLite)
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <NavLink to="">
                      <span>Software Development</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">Enterprise Applications</NavLink>
                      </li>
                      <li>
                        <NavLink to="">API Development & Integration</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="">
                      <span>Cloud Solutions</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">
                          AWS Services (EC2, S3 Bucket, Lambda, RDS)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          GCS Services & E2E Cloud Solutions
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="">
                      <span>UI/UX Design</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">User Research & Prototyping</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Visual Design & Branding</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="">
                      <span>AI/ML & Data Analytics</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">
                          Deep Learning & Computer Vision (TensorFlow, PyTorch,
                          OpenCV)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          NLP Frameworks (TensorFlow, Spacy, Gensim)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Pre-Trained Models (YOLO, CNN, Bert, Albert, LSTM)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Generative AI Frameworks (Langchain, OpenAI Models,
                          Gemini, Hugging Face)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Data Analytics (Tableau, Power BI, Pandas, Numpy,
                          Scikit-learn)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          ETL Pipelines (Kafka, Spark, Airflow, PySpark)
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="">
                      <span>Embedded Systems & IoT</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">
                          Embedded System Designing & Hardware Development
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          IoT Systems & Edge IoT Solutions
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Microcontrollers & Microprocessors (Atmega, ESP,
                          Raspberry Pi, Jetson Orin)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Firmware Development (C/C++, Lua, Python)
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* About */}
              <li className="dropdown">
                <NavLink to="">About Us</NavLink>
                <ul>
                  <li>
                    <NavLink to="">Mission & Vision</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Leadership Team</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Our Story</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Careers</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Culture & Values</NavLink>
                  </li>
                </ul>
              </li>
              {/* Industries */}
              <li className="dropdown">
                <NavLink to="">Industries</NavLink>
                <ul>
                  <li>
                    <NavLink to="">E-Commerce</NavLink>
                  </li>
                  <li>
                    <NavLink to="">FinTech</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Healthcare</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Education</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Logistics & Transportation</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Retail</NavLink>
                  </li>
                </ul>
              </li>
              {/* Technology stack */}
              <li className="dropdown">
                <NavLink to="">Technology Stack +</NavLink>
                <ul>
                  <li className="dropdown">
                    <NavLink to="">
                      <span className="subMenu-heading">
                        Frontend Development
                      </span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">HTML, CSS</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Bootstrap5</NavLink>
                      </li>
                      <li>
                        <NavLink to="">JavaScript(jQuery)</NavLink>
                      </li>
                      <li>
                        <NavLink to="">React, Angular</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="">
                      <span>Backend Development</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">
                          PHP<br></br> (CodeIgniter, Laravel)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Java(Spring MVC, Spring Boot, Hibernate, JPA)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">Python (Flask, Django)</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Node.js, REST APIs, Microservices
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <NavLink to="">
                      <span>Database Management</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to=""> MySQL, PostgreSQL, MS SQL</NavLink>
                      </li>
                      <li>
                        <NavLink to=""> MongoDB, DynamoDB, BigQuery</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="">
                      <span>DevOps & Tools</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">CI/CD Pipeline,</NavLink>
                      </li>
                      <li>
                        <NavLink to="">GitHub, GitLab , Docker, Jira</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Docker, Jira</NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Portfolio */}
              <li className="dropdown">
                <NavLink to="">
                  <span>Portfolio</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="">Featured Projects</NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to="">Case Studies</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Success Stories</NavLink>
                  </li>

                  <li className="dropdown">
                    <NavLink to="">
                      <span>Testimonials</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="">Client Reviews</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Video Testimonials</NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Blog */}
              <li className="dropdown">
                <NavLink to="">
                  <span>Blog</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="">Industry Trends</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Tech Tutorials</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Company Updates</NavLink>
                  </li>
                </ul>
              </li>
              {/* Contact Us */}
              <li className="dropdown">
                <NavLink to="">
                  <span>Contact Us</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="">Get a Free Consultation</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Request a Quote</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Support</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
      </>
  )
}

export default OurServices