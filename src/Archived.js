import React, {Component, Fragment} from 'react';
import TodosContainer from './containers/TodosContainer'
import SubHeading from "./components/SubHeading";

class Archived extends Component {
    render() {
        return (
            <Fragment>
                <SubHeading title='Archived Todos'/>
                <TodosContainer archived={true}/>
            </Fragment>
        );

    }
}

export default Archived;
