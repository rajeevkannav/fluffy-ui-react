import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

class TagAttachmentForm extends React.Component {

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
                    <Field name="name"
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
    if (!formValues.name) {
        errors.name = 'You must enter a tag name';
    }
    return errors;
};

export default reduxForm({
    form: 'TagAttachmentForm',
    validate
})(TagAttachmentForm);


