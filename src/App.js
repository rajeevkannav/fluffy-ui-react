import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import TodosContainer from './containers/TodosContainer'

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <TodosContainer />
        </div>
    );
  }
}

export default App;
