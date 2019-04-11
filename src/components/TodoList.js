import React, {Component} from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        const {todos} = this.props;
        return (
            todos.map((todo, index) => {
                return (
                    <TodoItem todo={todo} key={todo._id.$oid}
                              deleteTodo={this.props.deleteTodo}
                              toggleTodo={this.props.toggleTodo}/>
                )
            })
        );
    }
}

export default TodoList;