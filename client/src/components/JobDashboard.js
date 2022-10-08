import { useQuery } from '@apollo/client';
import JobList from './JobList';
import ModalMessage from './utils/ModalMessage';
import { JOBS_QUERY } from '../components/graphql/queries';
import { staticText } from './staticText';

function JobDashboard() {
  const { data, loading, error } = useQuery(JOBS_QUERY, {
    fetchPolicy: 'network-only'
  });
  const { jobs } = data;

  if (jobs.length === 0 && !error) return <progress className="progress is-info" max="100" />
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
