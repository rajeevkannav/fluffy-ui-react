import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import BackButton from './BackButton'

class TodoForm extends React.Component {

    renderError({touched, error}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <input {...input} className='form-control' placeholder='Todo title'/>
                {this.renderError(meta)}
            </div>
        )
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
        this.props.dispatch(reset('TodoForm'));
    };


    backButton() {
        if (this.props.backButtonRequired) {
            return <BackButton/>
        }
    }

    render() {

        const {handleSubmit} = this.props;
        return (
            <form className="form-inline" onSubmit={handleSubmit(this.onSubmit)}>
                <div className="form-group">
                    <Field name="title"
                           component={this.renderInput}/>
                </div>
                &nbsp;
                <button className="btn btn-primary col-sm-offset-3">Add Todo</button>
                {this.backButton()}
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    return errors;
};

export default reduxForm({
    form: 'TodoForm',
    validate
})(TodoForm);


