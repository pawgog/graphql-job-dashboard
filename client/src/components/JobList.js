import { Link } from 'react-router-dom';

function JobItem({ job }) {
  const { id, title, company } = job;

  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/jobs/${id}`}>
          <p>
            <strong>{title}</strong>
          </p>
          <p>
            <span className="icon mr-1">
              <i className="fa-solid fa-building"></i>
            </span>
            <span>{company.name}</span>
          </p>
        </Link>
      </div>
    </li>
  );
}

function JobList({ jobs }) {
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobList;
