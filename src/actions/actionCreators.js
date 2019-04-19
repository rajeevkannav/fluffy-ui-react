import {
    LOAD_TODOS,
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    RESTORE_TODO,
    FETCH_TODO,
    UPDATE_TODO,
    ATTACH_TAG
} from '../actions/actionTypes';

import todos from '../apis/todos';

export const loadTodos = (archived) => async dispatch => {
    const response = await todos.get(`todos?archived=${archived}`)
    dispatch({type: LOAD_TODOS, todos: response.data})
};

export const toggleTodo = (id, status) => async dispatch => {
    let params = {status: status};
    const response = await todos.patch(`todos/${id}/update_status.json`, params);
    dispatch({type: TOGGLE_TODO, payload: response.data})
};

export const deleteTodo = (id) => async dispatch => {
    await todos.delete(`todos/${id}.json`);
    dispatch({type: DELETE_TODO, id: id})
};

export const restoreTodo = id => async dispatch => {
    await todos.patch(`todos/${id}/restore.json`);
    dispatch({type: RESTORE_TODO, id: id})
};

export function fetchTodo(todo) {
    return {type: FETCH_TODO, todo: todo}
}

export function updateTodo(todo) {
    return {type: UPDATE_TODO, todo: todo}
}

export const addTodo = formValues => async dispatch => {
    const response = await todos.post('todos', formValues);
    dispatch({type: ADD_TODO, payload: response.data})
}
// export function addTodo(todo) {
//     return {type: ADD_TODO, todo: todo}
// }

export function attachTag(todo) {
    return {type: ATTACH_TAG, todo: todo}
}


