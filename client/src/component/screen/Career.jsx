import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import company from "../../assets/img/teamwork-1500x1001-1.jpg";
import { TfiBag } from "react-icons/tfi";
import { MdMyLocation } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";

const Career = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/getAlljob`) 
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch job data");
        }
        return res.json();
      })
      .then((data) => {
        const activeJobs = data.data.filter((job) => job.isActive === true);
        setJobData(activeJobs);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Career Hero Section */}
      <section className="bg-white mb-5 career-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 career-description">
              <h2 className="fw-bold">
                Build Your <span>Future</span> with Us!
              </h2>
              <p>
                Join a team that values creativity, innovation, and excellence.
                At Ignatiuz, we foster a culture where your ideas are nurtured,
                your growth is encouraged, and your achievements are celebrated.
                Shape your career and make a lasting impact with us.
              </p>
            </div>
            <div className="col-12 col-md-6 career-img">
              <img src={company} alt="Company" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <div className="container text-center section-divide mb-5">
        <h1 className="career-subtitle fw-bold">
          Find the Career of Your Dreams
        </h1>
        <p className="content-para">
          We’re more than just a workplace we’re a family
        </p>

        <div className="mobile-wrapper">
          <div className="container">
            <div className="row">
              {loading ? (
                <p>Loading jobs...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : jobData.length === 0 ? (
                <p>No job openings currently.</p>
              ) : (
                jobData.map((job, index) => (
                  <div className="col-md-6 mb-4" key={job.id}>
                    <article className="job-card">
                      <div className="career-icon">
                        <p>
                          <TfiBag className="bag-icon" />
                          On Site - Full Time
                        </p>
                      </div>

                      <div className="job-title">{job.title}</div>
                      <div className="skills-container">
                        <div className="skill">
                          <IoWalletOutline className="wallet-icon" />
                          {job.experience}
                        </div>
                        <div className="skill">01 Openings</div>
                        <div className="skill">
                          <MdMyLocation className="loc-icon" /> {job.location}
                        </div>
                      </div>
                      <div className="btn-container">
                        <button
                          className="btn btn-primary"
                          onClick={() => navigate(`/careers/${job._id}`)}
                        >
                          View Details
                        </button>
                      </div>
                    </article>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
