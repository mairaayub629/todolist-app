import { ADD_TO_LIST_SUCCEED, ADD_TO_LIST_FAILED, GET_LIST_FAILED, GET_LIST_SUCCEED } from '../types/listtypes';

const initialState = {
    list: []
};


const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_SUCCEED:
            return {
                ...state, list: action.payload.data
            };
 
        case GET_LIST_FAILED:
            return { ...state, list: [] };
        
        case ADD_TO_LIST_SUCCEED:
                return {
                    ...state, list: action.payload.data
                };
     
       
        default:
            return state;
    }
 };
 
 export default listReducer;