import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
    GET_ROCKS,
    CREATE_ROCK,
    DELETE_ROCK,
} from '../constants/rockConstants';
import axios from 'axios';

export const getRocks = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/rock');
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: GET_ROCKS,
            payload: response.data.rocks,
        });

        window.localStorage.setItem('getRocks', JSON.stringify());
    } catch (err) {
        console.log('getRocks API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};

export const createRock = formData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/rock', formData, config);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_SUCCESS_MESSAGE,
            payload: response.data.successMessage,
        });
        dispatch({
            type: CREATE_ROCK,
            payload: response.data.rock,
        });

        window.localStorage.setItem('createRock', JSON.stringify(formData));
    } catch (err) {
        console.log('createRock API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};

export const deleteRock = rockId => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.delete(`/api/rock/${rockId}`);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: DELETE_ROCK,
            payload: response.data,
        });

        window.localStorage.removeItem('deleteRock', JSON.stringify(rockId));
    } catch (err) {
        console.log('deleteRock API error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};