import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loadTodos, toggleTodo, deleteTodo} from '../actions/actionCreators';
import TodoList from '../components/TodoList'


class Todos extends Component {

    getTodos(archived) {
        axios.get(`http://localhost:3001/api/todos?archived=${archived}`)
            .then(response => {
                this.props.dispatch(loadTodos(response.data));
            })
            .catch(error => console.log(error))
    }


    toggleTodo = (params) => {
        var postData = {status: params.status};
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        axios.patch(`http://localhost:3000/api/todos/${params.id}/update_status`, postData, axiosConfig)
            .then(response => {
                this.props.dispatch(toggleTodo(params.id, response.data.todo.status));
            })
            .catch(error => console.log(error))
    };

    deleteTodo = (id) => {
        var postData = {};

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.delete(`http://localhost:3000/api/todos/${id}`, postData, axiosConfig)
            .then(response => {
                this.props.dispatch(deleteTodo(id))
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        const {archived} = this.props;
        this.getTodos(archived)
    }

    renderContent(todos) {
        if (todos.length > 0) {
            return <TodoList todos={todos}
                             deleteTodo={this.deleteTodo}
                             toggleTodo={this.toggleTodo}/>
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
        return this.renderContent(this.props.todos)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);