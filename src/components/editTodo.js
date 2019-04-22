import React from 'react';
import {connect} from 'react-redux';
import {fetchTodo, updateTodo} from '../actions/actionCreators'
import SubHeading from '../components/SubHeading';
import TodoForm from './TodoForm';

class editTodo extends React.Component {

    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id)
    }

    onSubmit = formValues => this.props.updateTodo(this.props.match.params.id, formValues);

    isPersistedTodo() {
        return (this.props.todo.title !== undefined)
    }

    submitButtonTitle() {
        return this.isPersistedTodo() ? "Update" : "Add"
    }

    renderContent() {
        return (
            <div>
                <SubHeading title={'Edit Todo'}/>
                <div className="row">
                    <div className="col-md-6">
                        <TodoForm initialValues={{title: this.props.todo.title}}
                                  backButtonRequired={true}
                                  submitButtonTitle={this.submitButtonTitle()}
                                  onSubmit={this.onSubmit}/>
                    </div>
                </div>

            </div>
        )
    }

    render() {
        if (this.isPersistedTodo()) {
            return this.renderContent()
        }
        return <div>Loading ...</div>
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todos.editingTodo
    }
};

export default connect(mapStateToProps, {
    fetchTodo,
    updateTodo
})(editTodo);