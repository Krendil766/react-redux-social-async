import ACTIONS_TYPES from './actionsTypes';
import axios from 'axios';

export const changePhoneActionCreator = (payload) => {
    return {
        type: ACTIONS_TYPES.CHANGE_PHONE,
        payload
    }
}
export const changePassword = (payload) => ({
    type: ACTIONS_TYPES.CHANGE_PASSWORD,
    payload
})

export const login = (phone, password) => {
    return async (dispatch) => {
        
        dispatch({
            type: ACTIONS_TYPES.LOGIN_START
        })

        try {
            const response = await axios.post('http://localhost:3001/auth/sign-in', {
                phone,
                password
            })
            dispatch({
                type: ACTIONS_TYPES.LOGIN_SUCCESS,
                payload: response.data
            })
        } catch (err) {
            dispatch({
                type: ACTIONS_TYPES.LOGIN_FAILURE,
                payload: err.response.data
            })
        }
    }
}