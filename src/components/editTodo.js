import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {fetchTodo, toggleTodo, updateTodo} from '../actions/actionCreators'
import SubHeading from '../components/SubHeading';
import TodoForm from './TodoForm';
import {Link} from "react-router-dom";

class editTodo extends React.Component {

    getTodo(id) {
        var postData = {};

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.get(`http://localhost:3000/api/todos/${id}`, postData, axiosConfig)
            .then(response => {
                this.props.dispatch(fetchTodo(response.data));
            })
            .catch(error => console.log(error))
    }

    onSubmit = formValues => {

        var postData = formValues;
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        const {id} = this.props.match.params;
        axios.patch(`http://localhost:3000/api/todos/${id}`, postData, axiosConfig)
            .then(response => {
                this.props.dispatch(updateTodo(response.data));
            })
            .catch(error => console.log(error))

    };


    componentDidMount() {
        this.getTodo(this.props.match.params.id)
    }

    render() {
        if (!this.props.todo.title) {
            return <div>Loading ...</div>
        }

        return (
            <div>
                <SubHeading title={'Edit Todo'}/>
                <div className="row">
                    <div className="col-md-6">
                        <TodoForm initialValues={{title: this.props.todo.title}}
                                  onSubmit={this.onSubmit}/>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todos.editingTodo
    }
}

export default connect(mapStateToProps)(editTodo);