import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useJob } from './graphql/hooks';

function JobDetail() {
  const { jobId } = useParams();
  const { job, loading, error } = useJob(jobId);

  if (loading) return <progress className="progress is-info" max="100" />

  const { title, company, description } = job;

  return (
    <div>
      <h1 className="title">
        {title}
      </h1>
      <h2 className="subtitle">
        <span className="icon mr-1 mt-2">
          <i className="fa-solid fa-building"></i>
        </span>
        <Link to={`/companies/${company.id}`}>
          {company.name}
        </Link>
      </h2>
      <div className="box">
        {description}
      </div>
    </div>
  );
}

export default JobDetail;
