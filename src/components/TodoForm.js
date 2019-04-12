import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

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
                <input {...input} className='form-control'/>
                {this.renderError(meta)}
            </div>
        )
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };


    render() {
        const {handleSubmit} = this.props;
        return (
            <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit)}>
                <div class="form-group">
                    <Field name="title"
                           component={this.renderInput}/>
                </div>
                <button className="btn btn-primary col-sm-offset-3">Save</button>
                &nbsp;<Link to={`/`} className='btn btn-primary col-sm-offset-3'>Back</Link>
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


