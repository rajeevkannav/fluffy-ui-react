import React, { Component } from 'react';
import TodosContainer from './containers/TodosContainer'
import SubHeading from "./components/SubHeading";

class Archived extends Component {
  render() {
    return (
        <div className="container">
          <SubHeading title='Archived Todos'/>
          <TodosContainer archived={true}/>
        </div>
    );

  }
}

export default Archived;
