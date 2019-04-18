import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import axios from 'axios';
import {loadTodos} from '../actions/actionCreators';
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
        const {name} = formValues;
        axios.get(`http://localhost:3001/api/tags/${name}/todos`)
            .then(response => {
                this.props.dispatch(loadTodos(response.data));
                this.props.dispatch(reset('SearchTodosByTagForm'));  // requires form name
            })
            .catch(error => console.log(error))
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
                        <Field name="name"
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


