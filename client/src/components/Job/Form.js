import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCreateJob } from '../graphql/hooks';
import { staticText } from '../utils/staticText';

function JobForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createJob, loading } = useCreateJob() 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const job = await createJob(title, description);
    navigate(`/jobs/${job.id}`);
  };

  return (
    <>
      <h1 className="title">
        {staticText.newJob}
      </h1>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">
              {staticText.title}
            </label>
            <div className="control">
              <input className="input" type="text" required value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">
              {staticText.description}
            </label>
            <div className="control">
              <textarea className="textarea" rows={10} required value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" 
                type="submit"
                disabled={loading}
              >
                {staticText.submit}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default JobForm;
