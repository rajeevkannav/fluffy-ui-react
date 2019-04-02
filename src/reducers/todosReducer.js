import { LOAD_TODOS} from '../actions/actionTypes'

function todosReducer(state = [], action)
{
    switch(action.type) {
        case LOAD_TODOS:
            return action.todos;

        default:
            return state;
    }
}

export default todosReducer;