import React, {Component} from 'react';
import TagShow from './TagShow';
import {Link} from "react-router-dom";

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

    restoreTodo = id => {
        console.log('inside TodoItem');
        this.props.restoreTodo(id)
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
                               checked={this.isFinished(todo)}
                               defaultChecked={false}/> {todo.title} {todo.id}
                    </a>
                    <div className="row">
                        <TagShow tagsName={todo.tags.map((tag, index) => {return tag.name}) } />
                    </div>

                </div>


                <div className="col-md-4">
                    <Link to={`/editTodo/${todo._id.$oid}`}>Edit</Link> | <Link to="/attachTags">Attach Tag(s)</Link> | <a href="javascript:void(0)" onClick={(e) => this.deleteTodo(todo._id.$oid)}> Delete </a>
                </div>
            </div>
        )
    }

    renderArchivedTodo(todo) {
        return (
            <div className="row">
                <div className="col-md-8">
                    {todo.title}
                    45. <span className="badge badge-success">{todo.status}</span>
                </div>

                <div className="col-md-4">
                    <a href='javascript:void(0)'
                       onClick={(e) => {
                           this.restoreTodo(todo._id.$oid)
                       }}>
                        Restore </a>
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