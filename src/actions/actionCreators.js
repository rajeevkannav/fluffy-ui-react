import {
    LOAD_TODOS,
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    RESTORE_TODO,
    FETCH_TODO,
    UPDATE_TODO,
    ATTACH_TAG,
    TODOS_BY_TAG
} from '../actions/actionTypes';
import todos from '../apis/todos';
import history from '../history';

export const loadTodos = (archived) => async dispatch => {
    const response = await todos.get(`todos?archived=${archived}`);
    dispatch({type: LOAD_TODOS, todos: response.data})
};

export const todosByTag = (tagName) => async dispatch => {
    const response = await todos.get(`tags/${tagName}/todos.json`);
    dispatch({type: TODOS_BY_TAG, todos: response.data})
};

export const addTodo = formValues => async dispatch => {
    const response = await todos.post('todos', formValues);
    dispatch({type: ADD_TODO, payload: response.data});
};

export const toggleTodo = (id, status) => async dispatch => {
    let params = {status: status};
    const response = await todos.patch(`todos/${id}/update_status.json`, params);
    dispatch({type: TOGGLE_TODO, payload: response.data})
};

export const deleteTodo = (id) => async dispatch => {
    await todos.delete(`todos/${id}.json`);
    dispatch({type: DELETE_TODO, id: id});
};

export const restoreTodo = id => async dispatch => {
    await todos.patch(`todos/${id}/restore.json`);
    dispatch({type: RESTORE_TODO, id: id});
};

export const fetchTodo = id => async dispatch => {
    const response = await todos.get(`todos/${id}.json`);
    dispatch({type: FETCH_TODO, payload: response.data})
};

export const updateTodo = (id, formvalues) => async dispatch => {
    const response = await todos.patch(`todos/${id}.json`, formvalues);
    dispatch({type: UPDATE_TODO, payload: response.data});
    history.push('/');
};

export const attachTag = (id, formvalues) => async dispatch => {
    const response = await todos.put(`todos/${id}/assign_tags`, formvalues);
    dispatch({type: ATTACH_TAG, payload: response.data});
    history.push('/');
};


