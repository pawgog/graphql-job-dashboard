import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { isLoggedIn } from './auth';
import CompanyDetail from './components/CompanyDetail';
import LoginForm from './components/Login/LoginForm';
import ProfilePage from './components/Profile/ProfilePage';
import JobDashboard from './components/Job/Dashboard';
import JobDetail from './components/Job/Job';
import JobForm from './components/Job/Form';
import NavBar from './components/NavBar';
import { client } from './components/graphql/queries';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <ApolloProvider client={client}>
      <NavBar loggedIn={loggedIn} onLogout={handleLogout} />
      <main className="section">
        <Routes>
          <Route exact path="/"
            element={<JobDashboard />}
          />
          <Route path="/companies/:companyId"
            element={<CompanyDetail />}
          />
          <Route exact path="/jobs/new"
            element={<JobForm />}
          />
          <Route path="/jobs/:jobId"
            element={<JobDetail />}
          />
          <Route path="/profile"
            element={<ProfilePage />}
          />
          <Route exact path="/login"
            element={<LoginForm onLogin={handleLogin} />}
          />
        </Routes>
      </main>
    </ApolloProvider>
  );
}

export default App;
