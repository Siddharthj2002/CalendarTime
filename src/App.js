// App.js
import React, { useState } from 'react';
import LeftPanel from './components/LeftPanel.js';
import Header from './components/Header.js';

import ContentGrid from './components/ContentGrid.js';

const App = () => {
  const [selectedPage, setSelectedPage] = useState(2);
  return (
    <div className="app">
      <LeftPanel selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="main-content">
        <Header />
        <ContentGrid selectedPage={selectedPage} />
      </div>
    </div>
  );
};

export default App;
