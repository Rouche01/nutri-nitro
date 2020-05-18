import React from 'react';
import RouteManager from './containers/RouteManager/RouteManager';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteManager />
      </BrowserRouter>
    </div>
  );
}

export default App;
