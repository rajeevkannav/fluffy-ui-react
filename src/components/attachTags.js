import React from 'react';
import {connect} from 'react-redux';
import SubHeading from './SubHeading'
import {fetchTodo, attachTag} from "../actions/actionCreators";
import TagAttachmentForm from './TagAttachmentForm';

class attachTags extends React.Component {

    onSubmit = formValues => this.props.attachTag(this.props.match.params.id, {tag: formValues});

    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id)
    }

    render() {
        if (!this.props.todo) {
            return (
                <div className="row">
                    <div className="col-md-12 alert alert-success" role="alert">
                        Loading.....
                    </div>
                </div>
            )
        }
        return (
            <div>
                <SubHeading title={'Attach Tags'}/>
                Todo Title: {this.props.todo.title}
                <TagAttachmentForm onSubmit={this.onSubmit}/>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todos.editingTodo
    }
};
export default connect(mapStateToProps, {
    fetchTodo,
    attachTag
})(attachTags);