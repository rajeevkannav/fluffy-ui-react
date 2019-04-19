import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadTodos, toggleTodo, deleteTodo, addTodo, restoreTodo} from '../actions/actionCreators';
import {reset} from 'redux-form';
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm';
import SearchTodosByTagForm from '../components/SearchTodosByTagForm';
import {toast} from "react-toastify";


class Todos extends Component {

    toggleTodo = params => this.props.toggleTodo(params.id, params.status);

    deleteTodo = id => this.props.deleteTodo(id);

    restoreTodo = id => this.props.restoreTodo(id);

    onSubmit = formValues => {
        this.props.addTodo(formValues);
    };

    componentDidMount() {
        const {archived} = this.props;
        this.props.loadTodos(archived);
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

export default connect(mapStateToProps, {
    loadTodos,
    toggleTodo,
    deleteTodo,
    restoreTodo,
    addTodo
})(Todos);