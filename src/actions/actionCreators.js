import { LOAD_TODOS } from '../actions/actionTypes'

export function loadTodos(todos) {
    return { type: LOAD_TODOS, todos: todos }
}
