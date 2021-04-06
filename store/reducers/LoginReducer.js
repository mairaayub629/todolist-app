import {RESTORE_AUTH_STATE, AUTHENTICATE, DEAUTHENTICATE} from "../types/logintypes";
let initialState = {};


const loginReducer = (state = initialState, action) => {
   switch (action.type) {
       case DEAUTHENTICATE:
           return {
               isLoggedIn: false
           };

       case AUTHENTICATE:
           const authObj = {
               isLoggedIn: true,
               user: action.payload
           };
           return authObj;
       case RESTORE_AUTH_STATE:
           return {
               isLoggedIn: true,
               user: action.payload.user
           };
       default:
           return state;
   }
};

export default loginReducer;