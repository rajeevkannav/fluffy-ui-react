import React, {Component, Fragment} from 'react';
import TodosContainer from './containers/TodosContainer'
import SubHeading from './components/SubHeading'
import toast from './Toast'

class App extends Component {
    render() {
        return (
            <Fragment>
                <SubHeading title='Available Todos'/>
                <TodosContainer archived={false}/>
            </Fragment>
        );
    }
}

export default App;
