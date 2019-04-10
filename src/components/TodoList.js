import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        const todos = this.props.todos;
        return (
            <div className="row">
                <div className="col-md-8">
                    <ul className="col-md-8">
                        {todos.map((todo) => {
                            return (
                                <TodoItem todo={todo} key={todo.id}/>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-md-4">
                    Edit
                    |
                    Attach Tag(s)
                    |
                    Delete
                </div>
            </div>
        );
    }
}

export default TodoList;