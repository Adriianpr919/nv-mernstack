import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
    SHOW_ERROR_MESSAGE,
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    GET_STONES,
    CREATE_ROCK, 
} from '../constants/stoneConstants';
import axios from 'axios';

export const getStones = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/stone');
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: GET_STONES, 
            payload: response.data.stones
        });
    } catch (err) {
        console.log('getStones API Error: ', err);
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
        const response = await axios.post('/api/stone', formData, config);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_SUCCESS_MESSAGE, 
            payload: response.data.successMessage, 
        });
        dispatch({ 
            type: CREATE_ROCK, 
            payload: response.data.rock
        });
    } catch (err) {
        console.log('createRock API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_ERROR_MESSAGE, 
            payload: err.response.data.errorMessage, 
        });
    }
};