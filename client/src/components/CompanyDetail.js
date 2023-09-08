import { useParams } from 'react-router';
import { useCompany } from './graphql/hooks';
import JobList from './Job/List';
import { staticText } from './utils/staticText';

function CompanyDetail() {
  const { companyId } = useParams();
  const { company, loading } = useCompany(companyId);

  if (loading) return <progress className="progress is-info" max="100" />

  const {name, description, jobs} = company;

  return (
    <>
      <h1 className="title">
        {name}
      </h1>
      <div className="box mb-6">
        {description}
      </div>
      <h6 className="subtitle">{jobs.length > 1 ? staticText.jobsList : staticText.jobList} {name}:</h6>
      <JobList jobs={jobs} />
    </>
  );
}

export default CompanyDetail;
