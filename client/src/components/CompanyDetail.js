import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCompany } from './graphql/queries';
import JobList from './JobList';
import { staticText } from './staticText';

function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const { companyId } = useParams();

  useEffect(() => {
      getCompany(companyId).then(setCompany)
  }, [companyId]);

  if (!company) return <progress className="progress is-info" max="100" />

  const {name, description, jobs} = company;

  return (
    <div>
      <h1 className="title">
        {name}
      </h1>
      <div className="box mb-6">
        {description}
      </div>
      <JobList jobs={jobs} />
    </div>
  );
}

export default CompanyDetail;
