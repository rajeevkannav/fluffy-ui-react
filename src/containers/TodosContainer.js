import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loadTodos, toggleTodo, deleteTodo, addTodo} from '../actions/actionCreators';
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm';
import SearchTodosByTagForm from '../components/SearchTodosByTagForm';


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

    restoreTodo = id => {
        var postData = {};

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.patch(`http://localhost:3000/api/todos/${id}/restore`, postData, axiosConfig)
            .then(response => {
                this.props.dispatch(deleteTodo(id))
            })
            .catch(error => console.log(error))

    };


    onSubmit = formValues => {

        var postData = formValues;
        console.log(postData)
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        axios.post(`http://localhost:3000/api/todos`, postData, axiosConfig)
            .then(response => {
                this.props.dispatch(addTodo(response.data.todo));
            })
            .catch(error => console.log(error))

    };

    componentDidMount() {
        const {archived} = this.props;
        this.getTodos(archived)
    }

    renderContent(todos) {
        if (todos.length > 0) {
            return <TodoList todos={todos}
                             restoreTodo={this.restoreTodo}
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
        if (!this.props.todos) {
            return (
                <div className="row">
                    <div className="col-md-12 alert alert-success" role="alert">
                        Hooray!!! no todo
                    </div>
                </div>
            )
        }
        return (
            <React.Fragment>
                {this.renderContent(this.props.todos)}
                <hr className="style5"/>
                <div className="row">
                    <div className="col-md-6">
                        <SearchTodosByTagForm/>
                    </div>
                    <div className="col-md-6">
                        <TodoForm onSubmit={this.onSubmit}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.items
    }
}

export default connect(mapStateToProps)(Todos);