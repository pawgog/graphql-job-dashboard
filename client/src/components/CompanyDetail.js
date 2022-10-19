import { useParams } from 'react-router';
import { useCompany } from './graphql/hooks';
import JobList from './JobList';
import { staticText } from './staticText';

function CompanyDetail() {
  const { companyId } = useParams();
  const { company, loading } = useCompany(companyId);

  if (loading) return <progress className="progress is-info" max="100" />

  const {name, description, jobs} = company;

  return (
    <div>
      <h1 className="title">
        {name}
      </h1>
      <div className="box mb-6">
        {description}
      </div>
      <h6 className="subtitle">{jobs.length > 1 ? staticText.jobsList : staticText.jobList} {name}:</h6>
      <JobList jobs={jobs} />
    </div>
  );
}

export default CompanyDetail;
