import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import PostsList from './PostsList';
import DisplayCurrentURL from './Post';

// Define language paths as constants
const ENGLISH_PATH = '/in-english';
const PORTUGUESE_PATH = '/em-portugues';

// Create a new component that will be rendered inside the Router
function Content() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine the language based on the URL path
  const language = location.pathname.startsWith(PORTUGUESE_PATH) ? 'pt' : 'en';

  // Remove trailing slash from the current URL
  React.useEffect(() => {
    if (location.pathname.endsWith('/')) {
      const newPathname = location.pathname.slice(0, -1);
      navigate(newPathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="App">
      <header className="App-header">
        {['/', ENGLISH_PATH, PORTUGUESE_PATH].includes(location.pathname.replace(/\/$/, '')) ? <Header /> : null}

        {/* Define the routes for the application */}
        <Routes>
          {/* Index route for posts in English */}
          <Route path={ENGLISH_PATH} element={<PostsList language="en" />} />
          {/* Route for posts in English with additional path */}
          <Route path={`${ENGLISH_PATH}/*`} element={<PostsList language="en" />} />
          {/* Index route for posts in Portuguese */}
          <Route path={PORTUGUESE_PATH} element={<PostsList language="pt" />} />
          {/* Route for posts in Portuguese with additional path */}
          <Route path={`${PORTUGUESE_PATH}/*`} element={<PostsList language="pt" />} />
          {/* Route for displaying the current URL */}
          <Route path="/:title/*" element={<DisplayCurrentURL />} />
          {/* Default route */}
          <Route path="/*" element={<PostsList language={language} />} />
        </Routes>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;