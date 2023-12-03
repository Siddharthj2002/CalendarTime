// LeftPanel.js
import React from "react";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="button-container">
        <button className="button">
          <img src="https://picsum.photos/200/300" alt="User Profile Picture" />
          <div className="user-details">
            <medium>Hi</medium>
            <span>John</span>
          </div>
        </button>
        <button className="button">Button 2</button>
        <button className="button">Button 3</button>
        <button className="button">Button 4</button>
        <button className="button">Button 5</button>
      </div>
    </div>
  );
};

export default LeftPanel;
