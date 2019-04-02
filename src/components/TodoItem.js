import React, {Component} from 'react'

class TodoItem extends Component {

    render() {
        const todo = this.props.todo;
        return (
            <li className="task" key={todo.id} id={todo.id}>
                <label className="taskLabel">{todo.title}</label>
            </li>
        );
    }
}

export default TodoItem;