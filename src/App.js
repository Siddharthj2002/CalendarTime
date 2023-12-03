// App.js
import React from 'react';
import LeftPanel from './components/Calendar/LeftPanel.js';
import Header from './components/Calendar/Header.js';
import CalendarGrid from './components/Calendar/CalendarGrid.js';

const App = () => {
  return (
    <div className="app">
      <LeftPanel />
      <div className="main-content">
        <Header />
        <CalendarGrid />
      </div>
    </div>
  );
};

export default App;
