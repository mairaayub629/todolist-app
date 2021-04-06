import { ADD_TO_LIST_SUCCEED, ADD_TO_LIST_FAILED, GET_LIST_FAILED, GET_LIST_SUCCEED } from '../types/listtypes';

export const AddToList = (data) => {
    return {
        type: ADD_TO_LIST_SUCCEED,
        payload: data
    }
}

export const GetList = () => {
    return {
        type: GET_LIST_SUCCEED,
        payload: data
    }
}