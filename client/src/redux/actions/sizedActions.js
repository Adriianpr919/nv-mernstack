import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
    GET_SIZEDS,
    CREATE_SIZED,
    DELETE_SIZED,
} from '../constants/sizedConstants';
import axios from 'axios';

export const getSizeds = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/sized');
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: GET_SIZEDS,
            payload: response.data.sizeds,
        });

        window.localStorage.setItem('getSizeds', JSON.stringify());
    } catch (err) {
        console.log('getSizeds API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};

export const createSized = formData => async dispatch => {
    try {
        const config = {
            Headers: {
                'Content-Type': 'application/json',
            },
        };
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/sized', formData, config);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_SUCCESS_MESSAGE,
            payload: response.data.successMessage,
        });
        dispatch({
            type: CREATE_SIZED,
            payload: response.data.sized,
        });

        window.localStorage.setItem('createSized', JSON.stringify(formData));
    } catch (err) {
        console.log('createSized API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};

export const deleteSized = sizedId => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.delete(`/api/sized/${sizedId}`);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: DELETE_SIZED,
            payload: response.data,
        });

        window.localStorage.removeItem('deleteSized', JSON.stringify(sizedId));
    } catch (err) {
        console.log('deleteSized API error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};