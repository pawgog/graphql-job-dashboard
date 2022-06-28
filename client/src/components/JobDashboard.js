import { useEffect, useState } from 'react';
import JobList from './JobList';
import { getJobs } from '../components/graphql/queries';

function JobDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs)
  }, [])

  return (
    <div>
      <h1 className="title">
        Job Dashboard
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobDashboard;
