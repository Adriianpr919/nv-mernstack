import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    CREATE_GOLDEN, 
    GET_GOLDS,
    GET_GOLD,
    DELETE_GOLDEN, 
} from '../constants/goldenConstants';

export const createGolden = formData => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/golden', formData);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_SUCCESS_MESSAGE, 
            payload: response.data.successMessage, 
        });
        dispatch({ 
            type: CREATE_GOLDEN, 
            payload: response.data.golden, 
        });

        localStorage.setItem('createGolden', JSON.stringify(formData));
    } catch (err) {
        console.log('createGolden API Error: ', err);
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
        const response = await axios.get('/api/golden');
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: GET_GOLDS, 
            payload: response.data.golds, 
        });

        localStorage.setItem('userGolds', JSON.stringify());
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
		const response = await axios.get('/api/golden/count');
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_GOLDS,
			payload: response.data.golds,
		});

        localStorage.setItem('userGolds', JSON.stringify());
	} catch (err) {
		console.log('getGolds API error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getGold = goldenId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(`/api/golden/${goldenId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_GOLD,
			payload: response.data,
		});

        localStorage.setItem('userGolds', JSON.stringify(goldenId));
	} catch (err) {
		console.log('getGolds API error: ', err);
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

        localStorage.removeItem('deleteGolden', JSON.stringify(goldenId));
    } catch (err) {
        console.log('deleteGolden API error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};