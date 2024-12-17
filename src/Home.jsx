import { useState, useEffect } from "react";

function Home() {
  const [items, setItems] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("./data.json");
      const result = await response.json();
      setItems(result);
      console.log(result);
    };

    getData();
  }, []);

  return (
    <div className="job-listings">
      {items.map((job) => (
        <div key={job.id} className={`job-card`}>
          <div className="job-header">
            <img src={job.logo} className="company-logo" />
            <div>
              <div className="company-name">
                {job.company}
                {job.new && <span className="badge new">new</span>}
                {job.featured && (
                  <span className="badge featured"> featured</span>
                )}
              </div>
              <h2 className="job-title">{job.position}</h2>
              <div className="job-meta">
                <span>{job.postedAt}</span>
                <span>• {job.contract}</span>
                <span>• {job.location}</span>
              </div>
            </div>
          </div>
          <div className="job-tags">
            {[job.role, job.level, ...job.languages, ...job.tools].map(
              (value) => (
                <span key={value} className="job-tag">
                  {value}
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
