import React, {Component} from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    isFinished(todo) {
        return (todo.status === 'finished')
    }

    toggleStatusTodo = (todo) => {
        this.props.toggleTodo({
            id: todo._id.$oid,
            status: (todo.status === 'finished') ? 'started' : 'finished'
        })
    };

    deleteTodo = id => {
        this.props.deleteTodo(id)
    };


    renderActiveTodo(todo) {
        return (
            <div className="row">
                <div className="col-md-8">
                    <a href="javascript:void(0)"
                       key={todo.id}
                       id={todo.id}
                       onClick={(e) => this.toggleStatusTodo(todo)}
                       className={this.isFinished(todo) ? 'lineThrough' : ''}>

                        <input type="checkbox"
                               className="pull-left"
                               defaultChecked={ this.isFinished(todo) }/> {todo.title} {todo.id}
                    </a>
                </div>

                <div className="col-md-4">
                    <a href="/"> Edit </a>
                    |
                    <a href="/"> Attach Tag(s) </a>
                    |
                    <a href="javascript:void(0)" onClick={(e) => this.deleteTodo(todo._id.$oid)}> Delete </a>
                </div>
            </div>
        )
    }

    renderArchivedTodo(todo) {
        return (
            <div className="row">
                <div className="col-md-8">
                    45. {todo.title} <span className="badge badge-success">{todo.status}</span>
                </div>

                <div className="col-md-4">
                    <a href='#'> Restore </a>
                </div>
                <hr className='style4'/>
            </div>

        )
    }

    renderTodo(todo) {
        return (!todo.is_deleted) ? this.renderActiveTodo(todo) : this.renderArchivedTodo(todo)
    }

    render() {
        const {todo} = this.props;
        return this.renderTodo(todo)
    }
}


export default TodoItem;