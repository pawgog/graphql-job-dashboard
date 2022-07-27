import { useEffect, useState } from 'react';
import JobList from './JobList';
import ModalMessage from './utils/ModalMessage';
import { getJobs } from '../components/graphql/queries';
import { staticText } from './staticText';

function JobDashboard() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getJobs().then(setJobs).catch(() => setError(true))
  }, [])

  if (jobs.length === 0 && !error) return <progress class="progress is-info" max="100" />
  if (error) return ModalMessage(staticText.errorMessage, 'danger')

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
