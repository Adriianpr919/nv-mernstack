import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    GET_SIZES,
    CREATE_SIZED, 
} from '../constants/sizeConstants';
import axios from 'axios';

export const getSizes = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/size');
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: GET_SIZES, 
            payload: response.data.sizes
        });
    } catch (err) {
        console.log('getSizes API Error: ', err);
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
            headers: {
                'Content-Type': 'application/json',
            },
        };
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/size', formData, config);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_SUCCESS_MESSAGE, 
            payload: response.data.successMessage, 
        });
        dispatch({ 
            type: CREATE_SIZED, 
            payload: response.data.sized 
        });
    } catch (err) {
        console.log('createSized API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_ERROR_MESSAGE, 
            payload: err.response.data.errorMessage, 
        });
    }
};