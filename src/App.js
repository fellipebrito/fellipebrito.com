import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import PostsList from './PostsList';
import DisplayCurrentURL from './Post';

// Define language paths as constants
const ENGLISH_PATH = '/in-english';
const PORTUGUESE_PATH = '/em-portugues';

// Create a new component that will be rendered inside the Router
function Content() {
  const location = useLocation();

  // Determine the language based on the URL path
  const language = location.pathname.startsWith(PORTUGUESE_PATH) ? 'pt' : 'en';

  return (
    <div className="App">
      <header className="App-header">
        {location.pathname === '/' || location.pathname === ENGLISH_PATH || location.pathname === PORTUGUESE_PATH ? <Header /> : null}

        {/* Define the routes for the application */}
        <Routes>
          {/* Route for posts in English */}
          <Route path={ENGLISH_PATH} element={<PostsList language="en" />} />
          {/* Route for posts in Portuguese */}
          <Route path={`${PORTUGUESE_PATH}/*`} element={<PostsList language="pt" />} />
          {/* Route for displaying the current URL */}
          <Route path="/:title" element={<DisplayCurrentURL />} />
          {/* Default route */}
          <Route path="/" element={<PostsList language={language} />} />
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