import React, {Component} from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        const {todos} = this.props;
        return (
            todos.map((todo, index) => {
                return (
                    <TodoItem todo={todo}
                              key={index}
                              index={index}
                              restoreTodo={this.props.restoreTodo}
                              deleteTodo={this.props.deleteTodo}
                              toggleTodo={this.props.toggleTodo}/>
                )
            })
        );
    }
}

export default TodoList;