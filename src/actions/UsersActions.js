import ACTIONS_TYPES from './actionsTypes';
import axios from 'axios';


export const getUsers = (url) => {
    return async (dispatch) => {
        dispatch({
            type:ACTIONS_TYPES.GET_USER_START
        })
        try {
            const response = await axios.get(url);

            dispatch({
                type: ACTIONS_TYPES.GET_USER_SUCCESS,
                payload: response.data
            })
        } catch (err) {
            dispatch({
                type: ACTIONS_TYPES.GET_USER_FAILURE,
                payload:err.resposnce.data
            })
        }
    }
}