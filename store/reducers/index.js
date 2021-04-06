import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import LoginReducer from "./LoginReducer";
import listReducer from './todolist';

const rootreducer = combineReducers({
    form: formReducer,
    login: LoginReducer,
    todolist: listReducer,
});

export default rootreducer;
