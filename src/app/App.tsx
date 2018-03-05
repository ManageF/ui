import * as React from 'react';
import './App.css';

const logo = require('../logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-intro"/>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
