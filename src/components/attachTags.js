import React from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import SubHeading from './SubHeading'
import {fetchTodo, attachTag} from "../actions/actionCreators";
import TagAttachmentForm from './TagAttachmentForm';

class attachTags extends React.Component{

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
                console.log(response.data)
                this.props.dispatch(fetchTodo(response.data));
            })
            .catch(error => console.log(error))
    }

    onSubmit = formValues => {
        console.log('lalala land');
        console.log(formValues);
        var postData = {tag: formValues};
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        const {id} = this.props.match.params;
        axios.put(`http://localhost:3000/api/todos/${id}/assign_tags`, postData, axiosConfig)
            .then(response => {
                console.log(response.data)
                this.props.dispatch(attachTag(response.data));
            })
            .catch(error => console.log(error))

    };



    componentDidMount() {
        const {id} = this.props.match.params;
        this.getTodo(id);
    }

    render(){
        if(!this.props.todo) {
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
                {this.props.todo.title}

                <TagAttachmentForm onSubmit={this.onSubmit}/>
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todo: state.todos.editingTodo
    }
}
export default connect(mapStateToProps)(attachTags);