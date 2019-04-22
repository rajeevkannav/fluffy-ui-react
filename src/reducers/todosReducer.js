import {
    LOAD_TODOS,
    DELETE_TODO,
    TOGGLE_TODO,
    RESTORE_TODO,
    FETCH_TODO,
    UPDATE_TODO,
    ADD_TODO,
    ATTACH_TAG, TODOS_BY_TAG
} from '../actions/actionTypes'

const INITIAL_STATE = {
    items: [],
    editingTodo: {}
};

function todosReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_TODOS:
            return {...state, items: action.todos};
        case TODOS_BY_TAG:
            return {...state, items: action.todos};
        case ADD_TODO:
            return {...state, items: [...state.items, action.payload.todo]};
        case DELETE_TODO:
            return {...state, items: state.items.filter(todo => todo._id.$oid !== action.id)}
        case RESTORE_TODO:
            return {...state, items: state.items.filter(todo => todo._id.$oid !== action.id)}
        case TOGGLE_TODO:
            const todoId = action.payload.todo._id.$oid;
            const todoStatus = action.payload.todo.status;
            return {
                ...state, items: state.items.map(todo => (todo._id.$oid === todoId)
                    ? {...todo, status: todoStatus}
                    : todo
                )
            };
        case FETCH_TODO:
            return {...state, items: state.items, editingTodo: action.payload};
        case UPDATE_TODO:
            const updatedTodo = action.payload.todo;
            return {
                ...state,
                items: state.items.map(todo => (todo._id.$oid === updatedTodo._id.$oid) ? updatedTodo : todo),
                editingTodo: {}
            };
        case ATTACH_TAG:
            const todoWithTags = action.payload;
            return {
                ...state,
                items: state.items.map(todo => (todo._id.$oid === todoWithTags._id.$oid) ? todoWithTags : todo),
                editingTodo: {}
            };
        default:
            return state;
    }
}

export default todosReducer;