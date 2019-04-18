import {
    LOAD_TODOS,
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    RESTORE_TODO,
    FETCH_TODO,
    UPDATE_TODO,
    ATTACH_TAG
} from '../actions/actionTypes'

export function loadTodos(todos) {
    return { type: LOAD_TODOS, todos: todos }
}

export function toggleTodo(index, todoStatus) {
    return {type: TOGGLE_TODO, index: index, todoStatus: todoStatus}
}

export function deleteTodo(index) {
    return { type: DELETE_TODO, index: index }
}
export function restoreTodo(index) {
    return { type: RESTORE_TODO, index: index }
}

export function fetchTodo(todo) {
    return { type: FETCH_TODO, todo: todo }
}
export function updateTodo(todo) {
    return { type: UPDATE_TODO, todo: todo }
}
export function addTodo(todo) {
    return { type: ADD_TODO, todo: todo }
}

export function attachTag(todo) {
    return {type: ATTACH_TAG, todo: todo}
}


