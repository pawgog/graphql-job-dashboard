import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { JOB_QUERY, CREATE_JOB_MUTATION } from './graphql/queries';
import { getAccessToken } from '../auth';
import { staticText } from './staticText';

function JobForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mutate, { loading }] = useMutation(CREATE_JOB_MUTATION)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data: { job }} = await mutate({
      variables: { input: { title, description }},
      context: {
        headers: {'Authorization': `Bearer ${getAccessToken()}`}
      },
      update: (cache, { data: { job } }) => {
        cache.writeQuery({
            query: JOB_QUERY,
            variables: { id: job.id },
            data: { job },
        })
    }
    })
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div>
      <h1 className="title">
        {staticText.newJob}
      </h1>
      <div className="box">
        <form>
          <div className="field">
            <label className="label">
              {staticText.title}
            </label>
            <div className="control">
              <input className="input" type="text" value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">
              {staticText.description}
            </label>
            <div className="control">
              <textarea className="textarea" rows={10} value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" 
                disabled={loading}
                onClick={handleSubmit}
              >
                {staticText.submit}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobForm;
