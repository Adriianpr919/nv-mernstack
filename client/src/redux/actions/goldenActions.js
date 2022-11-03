import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
    GET_GOLDENS,
    CREATE_GOLDEN,
    DELETE_GOLDEN,
} from '../constants/goldenConstants';
import axios from 'axios';

export const getGoldens = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/golden');
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: GET_GOLDENS,
            payload: response.data.goldens,
        });

        window.localStorage.setItem('getGoldens', JSON.stringify());
    } catch (err) {
        console.log('getGoldens API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};

export const createGolden = formData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/golden', formData, config);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_SUCCESS_MESSAGE,
            payload: response.data.successMessage,
        });
        dispatch({
            type: CREATE_GOLDEN,
            payload: response.data.golden,
        });

        window.localStorage.setItem('createGolden', JSON.stringify(formData));
    } catch (err) {
        console.log('createGolden API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};

export const deleteGolden = goldenId => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.delete(`/api/golden/${goldenId}`);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: DELETE_GOLDEN,
            payload: response.data,
        });

        window.localStorage.removeItem('deleteGolden', JSON.stringify(goldenId));
    } catch (err) {
        console.log('deleteGolden API error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};