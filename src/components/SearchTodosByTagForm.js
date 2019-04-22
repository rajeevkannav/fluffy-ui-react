import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import {todosByTag} from '../actions/actionCreators';
import BackButton from './BackButton'

class SearchTodosByTagForm extends React.Component {

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
                <input {...input} className='form-control' placeholder="Search"/>
                {this.renderError(meta)}
            </div>
        )
    };

    onSubmit = formValues => {
        const {tagName} = formValues;
        this.props.dispatch(todosByTag(tagName));
        this.props.dispatch(reset('SearchTodosByTagForm'));
    };

    backButton() {
        if (this.props.backButtonRequired) {
            return <BackButton/>
        }
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <React.Fragment>
                <form className="form-inline" onSubmit={handleSubmit(this.onSubmit)}>
                    <div className="form-group">
                        <Field name="tagName"
                               component={this.renderInput}/>
                    </div>
                    &nbsp;
                    <button className="btn btn-primary col-sm-offset-3">Lookup</button>
                    {this.backButton}
                </form>
            </React.Fragment>
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
    form: 'SearchTodosByTagForm',
    validate
})(SearchTodosByTagForm);


