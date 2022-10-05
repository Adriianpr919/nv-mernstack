import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    CREATE_SIZE, 
    GET_SIZES,
    GET_SIZE,
    DELETE_SIZE, 
} from '../constants/sizeConstants';

export const createSize = formData => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/size', formData);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_SUCCESS_MESSAGE, 
            payload: response.data.successMessage, 
        });
        dispatch({ 
            type: CREATE_SIZE, 
            payload: response.data.size, 
        });
        window.localStorage.setItem("userSizes", JSON.stringify(formData));
    } catch (err) {
        console.log('createSize API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_ERROR_MESSAGE, 
            payload: err.response.data.errorMessage, 
        });
    }
};

export const getSizes = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/size');
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: GET_SIZES, 
            payload: response.data.sizes, 
        });
        window.localStorage.setItem("userSizes", JSON.stringify());
    } catch (err) {
        console.log('getSizes API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_ERROR_MESSAGE, 
            payload: err.response.data.errorMessage, 
        });
    }
};

export const getSizesByCount = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get('/api/size/count');
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_SIZES,
			payload: response.data.sizes,
		});
        window.localStorage.setItem("userSizes", JSON.stringify());
	} catch (err) {
		console.log('getSizes API error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getSize = sizeId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(`/api/size/${sizeId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_SIZE,
			payload: response.data,
		});
        window.localStorage.setItem("userSizes", JSON.stringify(sizeId));
	} catch (err) {
		console.log('getSizes API error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const deleteSize = sizeId => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.delete(`/api/size/${sizeId}`);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: DELETE_SIZE,
            payload: response.data,
        });
        window.localStorage.setItem("userSizes", JSON.stringify(sizeId));
    } catch (err) {
        console.log('deleteSize API error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};