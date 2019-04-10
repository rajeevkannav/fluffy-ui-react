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


    renderActiveTodo(todo) {
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

    renderArchivedTodo(todo, srIndex) {
        return (
            <div className="row">
                <div className="col-md-8">
                    {srIndex + 1 }. {todo.title} <span className="badge badge-success">{todo.status}</span>
                </div>

                <div className="col-md-4">
                    <a href='#'> Restore </a>
                </div>
                <hr className='style4'/>
            </div>

        )
    }

    renderTodo(todo) {
        return (!todo.is_deleted) ? this.renderActiveTodo(todo) : this.renderArchivedTodo(todo, this.props.index)
    }

    render() {
        const {todo} = this.props;
        return this.renderTodo(todo)
    }
}

export default TodoItem;