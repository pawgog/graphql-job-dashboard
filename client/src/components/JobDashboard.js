import { useEffect, useState } from 'react';
import JobList from './JobList';
import { getJobs } from '../components/graphql/queries';
import { staticText } from './staticText';

function JobDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs)
  }, [])

  console.log('jobs', jobs);

  return (
    <div>
      <h1 className="title">
        {jobs.length > 1 ? staticText.jobsDashboard : staticText.jobDashboard}
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobDashboard;
