import { useState } from 'react';
import { login } from '../auth';
import { staticText } from './staticText';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    const success = await login(email, password);

    if (success) {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">
        <span class="icon is-small is-left mr-2">
          <i class="fas fa-envelope"></i>
        </span>
        <span>{staticText.email}</span>
        </label>
        <div className="control">
          <input className="input" type="email" placeholder="smith@example.com" required value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">
        <span class="icon is-small is-left mr-2">
          <i class="fas fa-lock"></i>
        </span>
        <span>{staticText.password}</span>
        </label>
        <div className="control">
          <input className="input" type="password" placeholder="********" required value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      {error && (
        <div className="message is-danger">
          <p className="message-body">
            {staticText.loginError}
          </p>
        </div>
      )}
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link">
            {staticText.login}
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
