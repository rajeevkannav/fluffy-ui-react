import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loadTodos} from '../actions/actionCreators';
import TodoList from '../components/TodoList'


class Todos extends Component {

    getTodos() {
        axios.get('http://localhost:3001/api/todos')
            .then(response => {
                this.props.dispatch(loadTodos(response.data));
            })
            .catch(error => console.log(error))

    }

    componentDidMount() {
        this.getTodos()
    }

    renderContent(todos) {
        if (todos.length > 0) {
            return <TodoList todos={todos}/>
        } else {
            return (
                <div className="row">
                    <div className="col-md-12 alert alert-success" role="alert">
                        Hooray!!! no todo
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                {this.renderContent(this.props.todos)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);