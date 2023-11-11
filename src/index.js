import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles
import App from './App'; // Root component

// Find the root element in the HTML
const rootElement = document.getElementById('root');
if (rootElement) {
  // Create a root container if the root element exists
  const root = ReactDOM.createRoot(rootElement);

  // Render the App component inside React's StrictMode for development.
  // StrictMode does not render any visible UI; it activates checks and warnings for its children.
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Log an error if the root element doesn't exist.
  console.error('Failed to find the root element: #root');
}