import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
    CREATE_ROCK,
    GET_ROCKS,
    GET_ROCK,
    DELETE_ROCK,
} from '../constants/rockConstants';

export const createRock = formData => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/rock', formData);
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

export const getRocksByCount = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get('/api/rock/count');
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_ROCKS,
			payload: response.data.rocks,
		});

        window.localStorage.setItem('getRocksByCount', JSON.stringify());
	} catch (err) {
		console.log('getRocksByCount API error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getRock = rockId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(`/api/rock/${rockId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_ROCK,
			payload: response.data,
		});

        window.localStorage.setItem('getRock', JSON.stringify(rockId));
	} catch (err) {
		console.log('getRock API error: ', err);
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