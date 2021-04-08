import { ADD_TO_LIST_SUCCEED, ADD_TO_LIST_FAILED, GET_LIST_FAILED, GET_LIST_SUCCEED } from '../types/listtypes';
import axios from 'axios';

export const AddToList = (data) => {
    return {
        type: ADD_TO_LIST_SUCCEED,
        payload: data
    }
}

export const GetList = () => async dispatch => {
    console.log('in action');

    return (dispatch) => {
        return axios.get(`https://todolist-app-24cb2-default-rtdb.firebaseio.com/`)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: GET_LIST_SUCCEED,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };

}