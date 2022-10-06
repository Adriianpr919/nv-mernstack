import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    CREATE_ROCK, 
    GET_STONES,
    GET_STONE,
    DELETE_ROCK, 
} from '../constants/rockConstants';

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

        window.localStorage.setItem("createRock", JSON.stringify(formData));
    } catch (err) {
        console.log('createRock API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_ERROR_MESSAGE, 
            payload: err.response.data.errorMessage, 
        });
    }
};

export const getStones = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/rock');
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: GET_STONES, 
            payload: response.data.stones, 
        });

        window.localStorage.setItem("userStones", JSON.stringify());
    } catch (err) {
        console.log('getStones API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_ERROR_MESSAGE, 
            payload: err.response.data.errorMessage, 
        });
    }
};

export const getStonesByCount = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get('/api/rock/count');
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_STONES,
			payload: response.data.stones,
		});

        window.localStorage.setItem("userStones", JSON.stringify());
	} catch (err) {
		console.log('getStones API error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getStone = rockId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(`/api/rock/${rockId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_STONE,
			payload: response.data,
		});

        window.localStorage.setItem("userStones", JSON.stringify(rockId));
	} catch (err) {
		console.log('getStones API error: ', err);
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

        window.localStorage.setItem("deleteRock", JSON.stringify(rockId));
    } catch (err) {
        console.log('deleteRock API error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};