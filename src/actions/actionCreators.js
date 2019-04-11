import { LOAD_TODOS, TOGGLE_TODO, DELETE_TODO } from '../actions/actionTypes'

export function loadTodos(todos) {
    return { type: LOAD_TODOS, todos: todos }
}

export function toggleTodo(index, todoStatus) {
    return {type: TOGGLE_TODO, index: index, todoStatus: todoStatus}
}

export function deleteTodo(index) {
    return { type: DELETE_TODO, index: index }
}