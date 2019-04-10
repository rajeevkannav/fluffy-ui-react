import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js'
import TodosContainer from './containers/TodosContainer'
import SubHeading from './components/SubHeading'

class App extends Component {
    render() {
        return (
            <div className="container">
                <SubHeading title='Available Todos'/>
                <TodosContainer/>
            </div>
        );
    }
}

export default App;
