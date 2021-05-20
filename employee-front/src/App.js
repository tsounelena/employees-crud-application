import React, { Component } from 'react';
import './App.css';
import EmployeesApp from './component/EmployeesApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <EmployeesApp />
      </div>
    );
  }
}

export default App;
