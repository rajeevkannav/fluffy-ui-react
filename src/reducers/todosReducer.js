import {
    LOAD_TODOS,
    DELETE_TODO,
    TOGGLE_TODO,
    RESTORE_TODO,
    FETCH_TODO,
    UPDATE_TODO,
    ADD_TODO,
    ATTACH_TAG
} from '../actions/actionTypes'

const INITIAL_STATE = {
    items: [],
    editingTodo: {}
};

function todosReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_TODOS:
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
            return {...state, editingTodo: action.todo};
        case UPDATE_TODO:
            const items = state.items.map(todo => {
                if (todo._id.$oid === action.todo._id.$oid) {
                    return todo;
                }
            });
            return {...state, items, editingItem: {}};
        case ATTACH_TAG:
            return {...state, items, editingItem: {}};
        default:
            return state;
    }
}

export default todosReducer;