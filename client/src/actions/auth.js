import { AUTH } from '../constants/actionTypes';
import * as api from '../api'

export const signin = (formData, history) => async (dispatch) => {
    try {
        
         const {data} = await api.signIn(formData);
         dispatch({type:AUTH, data});
        
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}
export const signup = (formData, history) => async (dispatch) => {
    try {
        console.log("entering");
        const {data} = await api.signUp(formData);
        console.log("data got");
        dispatch({type:AUTH, data});
        console.log("data dispatch");

        history.push('/');
        
    } catch (error) {
        console.log("error in actions");
        console.log(error);
    }
}