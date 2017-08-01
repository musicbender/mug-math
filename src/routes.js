import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App.jsx';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  );
}

// <Route path="/" component={App} />
