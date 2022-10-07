import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    CREATE_SIZED, 
    GET_SIZES,
    GET_SIZE,
    DELETE_SIZED, 
} from '../constants/sizedConstants';

export const createSized = formData => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/sized', formData);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_SUCCESS_MESSAGE, 
            payload: response.data.successMessage, 
        });
        dispatch({ 
            type: CREATE_SIZED, 
            payload: response.data.sized, 
        });

        localStorage.setItem('createSized', JSON.stringify(formData));
    } catch (err) {
        console.log('createSized API Error: ', err);
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
        const response = await axios.get('/api/sized');
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: GET_SIZES, 
            payload: response.data.sizes, 
        });

        localStorage.setItem('userSizes', JSON.stringify());
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
		const response = await axios.get('/api/sized/count');
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_SIZES,
			payload: response.data.sizes,
		});

        localStorage.setItem('userSizes', JSON.stringify());
	} catch (err) {
		console.log('getSizes API error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getSize = sizedId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(`/api/sized/${sizedId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_SIZE,
			payload: response.data,
		});

        localStorage.setItem('userSizes', JSON.stringify(sizedId));
	} catch (err) {
		console.log('getSizes API error: ', err);
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

        localStorage.removeItem('deleteSized', JSON.stringify(sizedId));
    } catch (err) {
        console.log('deleteSize API error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};