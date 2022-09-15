import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import { SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE } from '../constants/messageConstants';
import { GET_CATEGORIES, CREATE_CATEGORY } from '../constants/stoneConstants';
import axios from 'axios';

export const getStone = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/stone');
        dispatch({ type: STOP_LOADING });
        dispatch({ type: GET_CATEGORIES, payload: response.data.categoriesStone });
    } catch (err) {
        console.log('getStone API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};

export const createStone = formData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/stone', formData, config);
        dispatch({ type: STOP_LOADING });
        dispatch({ type: SHOW_SUCCESS_MESSAGE, payload: response.data.successMessage, });
        dispatch({ type: CREATE_CATEGORY, payload: response.data.stone });
    } catch (err) {
        console.log('createStone API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ type: SHOW_ERROR_MESSAGE, payload: err.response.data.errorMessage, });
    }
};