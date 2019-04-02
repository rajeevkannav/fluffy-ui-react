import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        const todos = this.props.todos;
        return (
            <div className="row">
                <ul className="col-md-8">
                    {todos.map((todo) => {
                        return (
                            <TodoItem todo={todo} key={todo.id}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList;