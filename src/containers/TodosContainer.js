import React, {Component} from 'react';
import axios from 'axios';
import  {connect} from 'react-redux';
import {loadTodos} from '../actions/actionCreators';
import TodoList from '../components/TodoList'


class Todos extends Component {

    getTodos(){
        axios.get('http://localhost:3001/api/v1/todos')
            .then(response => {
                this.props.dispatch(loadTodos(response.data));
            })
            .catch(error => console.log(error))

    }


    componentDidMount() {
        this.getTodos()
    }

    render(){
        return(
            <div className="container">
                <TodoList todos={this.props.todos} />
            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);