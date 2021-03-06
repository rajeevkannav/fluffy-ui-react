import React, {Component} from 'react';
import TagShow from './TagShow';
import {Link} from "react-router-dom";

class TodoItem extends Component {

    // Actions for not-deleted todoItem
    toggleStatusTodo = (todo) => {
        this.props.toggleTodo({
            id: todo._id.$oid,
            status: (todo.status === 'finished') ? 'started' : 'finished'
        })
    };

    deleteTodo = id => {
        this.props.deleteTodo(id)
    };

    // Actions for deleted todoItem
    restoreTodo = id => {
        this.props.restoreTodo(id)
    };

    //  status check todoItem
    isFinished(todo) {
        return todo.status === 'finished'
    }

    renderActiveTodo(todo) {
        let hrefLink = '#';
        return (
            <div className="row">
                <div className="col-md-8">
                    <a href={hrefLink}
                       key={todo.id}
                       id={todo.id}
                       onClick={(e) => this.toggleStatusTodo(todo)}
                       className={this.isFinished(todo) ? 'lineThrough' : ''}>

                        <input type="checkbox"
                               className="pull-left"
                               checked={this.isFinished(todo)}
                               onChange={(e) => this.toggleStatusTodo(todo)}

                        /> {todo.title} {todo.id}
                    </a>
                    <div className="row">
                        <TagShow tagsName={todo.tags.map((tag, index) => {
                            return tag.name
                        })}/>
                    </div>

                </div>


                <div className="col-md-4">
                    <Link to={`/editTodo/${todo._id.$oid}`}>Edit</Link> | <Link to={`/attachTags/${todo._id.$oid}`}>Attach
                    Tag(s)</Link> | <a href={hrefLink}
                                       onClick={(e) => this.deleteTodo(todo._id.$oid)}> Delete </a>
                </div>
            </div>
        )
    }

    renderArchivedTodo(todo) {
        let hrefLink = '#';
        return (
            <div className="row">
                <div className="col-md-8">
                    {this.props.index + 1}. {todo.title} <span className="badge badge-success">{todo.status}</span>
                </div>

                <div className="col-md-4">
                    <a href={hrefLink}
                       onClick={(e) => {
                           this.restoreTodo(todo._id.$oid)
                       }}>
                        Restore </a>
                </div>
                <hr className='style4'/>
            </div>

        )
    }

    renderTodo() {
        const {todo} = this.props;
        return (!todo.is_deleted) ? this.renderActiveTodo(todo) : this.renderArchivedTodo(todo)
    }

    render() {
        return this.renderTodo()
    }
}


export default TodoItem;