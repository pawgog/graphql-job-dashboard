import { useState } from 'react';
import { createJob } from './graphql/queries';
import { staticText } from './staticText';

function JobForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('should post a new job:', { title, description });
    const defaultCompanyId = 'pVbRRBQtMVw6lUAkj1k43'
    const job = await createJob({ title, defaultCompanyId, description })
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
              <button className="button is-link" onClick={handleSubmit}>
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
