import React, { useState } from "react";
import jobs from "./data";

const JobCard = ({ job }) => {
  return (
    <div className="card">
      <h3>{job.title}</h3>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by job title"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="container">
        <div className="job-cards">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
