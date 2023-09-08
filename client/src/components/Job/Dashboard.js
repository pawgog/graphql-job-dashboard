import JobList from './List';
import ModalMessage from '../utils/ModalMessage';
import { useJobs } from '../graphql/hooks';
import { staticText } from '../utils/staticText';

function JobDashboard() {
  const { jobs, loading, error } = useJobs();

  if (loading) return <progress className="progress is-info" max="100" />
  if (jobs.length === 0 && !error) return <progress className="progress is-info" max="100" />
  if (error) return ModalMessage(staticText.errorMessage, 'danger')

  return (
    <>
      <h1 className="title">
        {jobs.length > 1 ? staticText.jobsDashboard : staticText.jobDashboard}
      </h1>
      <JobList jobs={jobs} />
    </>
  );
}

export default JobDashboard;
