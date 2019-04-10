import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        const {todos} = this.props;
        return (
            todos.map((todo) => {
                return (
                    <TodoItem todo={todo} key={todo.id}/>
                )
            })
        );
    }
}

export default TodoList;