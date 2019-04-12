import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
    todos: todosReducer,
    form: formReducer
});

export default rootReducer;