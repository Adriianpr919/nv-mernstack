import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    GET_GOLDS,
    CREATE_GOLDEN, 
} from '../constants/goldConstants';
import axios from 'axios';

export const getGolds = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/gold');
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: GET_GOLDS, 
            payload: response.data.golds
        });
    } catch (err) {
        console.log('getGolds API Error: ', err);
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
        const response = await axios.post('/api/gold', formData, config);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_SUCCESS_MESSAGE, 
            payload: response.data.successMessage, 
        });
        dispatch({ 
            type: CREATE_GOLDEN, 
            payload: response.data.golden
        });
    } catch (err) {
        console.log('createGolden API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_ERROR_MESSAGE, 
            payload: err.response.data.errorMessage, 
        });
    }
};