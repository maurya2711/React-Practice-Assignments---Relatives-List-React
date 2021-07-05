import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          <li key="relativeListItem1">A</li>
          <li key="relativeListItem2">B</li>
          <li key="relativeListItem3">C</li>
          <li key="relativeListItem4">D</li>
        </ol>
      </div>
    );
  }
}

export default App;
