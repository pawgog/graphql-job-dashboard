import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCompany } from './graphql/queries';

function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const { companyId } = useParams();

  useEffect(() => {
      getCompany(companyId).then(setCompany)
  }, [companyId]);

  if (!company) return <progress className="progress is-info" max="100" />

  const {name, description} = company;

  return (
    <div>
      <h1 className="title">
        {name}
      </h1>
      <div className="box">
        {description}
      </div>
    </div>
  );
}

export default CompanyDetail;
