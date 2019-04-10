import React, {Component} from 'react';

class TodoItem extends Component {


    toggleStatus(todo) {
        console.log('I will toggle the todo status soon')
    }

    deleteTodo(todo) {
        console.log('I will deleteTodo the todo status soon')
    }

    isFinished(todo) {
        return (todo.status === 'finished')
    }

    render() {
        const {todo} = this.props;

        return (
            <div className="row">
                <div className="col-md-8">
                    <a href="javascript:void(0)" key={todo.id} onClick={this.toggleStatus}
                       className={this.isFinished(todo) ? 'lineThrough' : ''}>
                        <input type="checkbox"
                               className="pull-left"
                               checked={this.isFinished(todo)}/> {todo.title}
                    </a>
                </div>

                <div className="col-md-4">
                    <a href="/"> Edit </a>
                    |
                    <a href="/"> Attach Tag(s) </a>
                    |
                    <a href="/"> Delete </a>
                </div>
            </div>
        )
    }
}

export default TodoItem;