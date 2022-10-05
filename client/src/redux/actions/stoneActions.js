import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    CREATE_STONE, 
    GET_STONES,
    GET_STONE,
    DELETE_STONE, 
} from '../constants/stoneConstants';

export const createStone = formData => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/stone', formData);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_SUCCESS_MESSAGE, 
            payload: response.data.successMessage, 
        });
        dispatch({ 
            type: CREATE_STONE, 
            payload: response.data.stone, 
        });
        window.localStorage.setItem("userStones", JSON.stringify(formData));
    } catch (err) {
        console.log('createStone API Error: ', err);
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
        const response = await axios.get('/api/stone');
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
		const response = await axios.get('/api/stone/count');
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

export const getStone = stoneId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(`/api/stone/${stoneId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_STONE,
			payload: response.data,
		});
        window.localStorage.setItem("userStones", JSON.stringify(stoneId));
	} catch (err) {
		console.log('getStones API error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const deleteStone = stoneId => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.delete(`/api/stone/${stoneId}`);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: DELETE_STONE,
            payload: response.data,
        });
        window.localStorage.setItem("userStones", JSON.stringify(stoneId));
    } catch (err) {
        console.log('deleteStone API error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};