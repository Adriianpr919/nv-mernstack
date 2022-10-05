import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    CREATE_GOLD, 
    GET_GOLDS,
    GET_GOLD,
    DELETE_GOLD, 
} from '../constants/goldConstants';

export const createGold = formData => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/gold', formData);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_SUCCESS_MESSAGE, 
            payload: response.data.successMessage, 
        });
        dispatch({ 
            type: CREATE_GOLD, 
            payload: response.data.gold, 
        });
        window.localStorage.setItem("userGolds", JSON.stringify(formData));
    } catch (err) {
        console.log('createGold API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_ERROR_MESSAGE, 
            payload: err.response.data.errorMessage, 
        });
    }
};

export const getGolds = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/gold');
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: GET_GOLDS, 
            payload: response.data.golds, 
        });
        window.localStorage.setItem("userGolds", JSON.stringify());
    } catch (err) {
        console.log('getGolds API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_ERROR_MESSAGE, 
            payload: err.response.data.errorMessage, 
        });
    }
};

export const getGoldsByCount = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get('/api/gold/count');
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_GOLDS,
			payload: response.data.golds,
		});
        window.localStorage.setItem("userGolds", JSON.stringify());
	} catch (err) {
		console.log('getGolds API error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getGold = goldId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(`/api/gold/${goldId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_GOLD,
			payload: response.data,
		});
        window.localStorage.setItem("userGolds", JSON.stringify(goldId));
	} catch (err) {
		console.log('getGolds API error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const deleteGold = goldId => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.delete(`/api/gold/${goldId}`);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: DELETE_GOLD,
            payload: response.data,
        });
        window.localStorage.setItem("userGolds", JSON.stringify(goldId));
    } catch (err) {
        console.log('deleteGold API error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};