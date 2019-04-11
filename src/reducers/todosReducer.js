import { LOAD_TODOS, DELETE_TODO, TOGGLE_TODO, RESTORE_TODO} from '../actions/actionTypes'

function todosReducer(state = [], action)
{
    switch(action.type) {
        case LOAD_TODOS:
            return action.todos;

        case DELETE_TODO:
            return state.filter(todo => todo._id.$oid !== action.index);
        case RESTORE_TODO:
            return state.filter(todo => todo._id.$oid !== action.index);
        case TOGGLE_TODO:
            return state.map(todo => (todo._id.$oid === action.index)
                ? {...todo, status: action.todoStatus}
                : todo
            );

        default:
            return state;
    }
}

export default todosReducer;