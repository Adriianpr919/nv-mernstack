import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import { 
    SHOW_ERROR_MESSAGE, 
    SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { 
    GET_CATEGORIES, 
    CREATE_CATEGORY, 
    DELETE_CATEGORY,
} from '../constants/categoryConstants';
import axios from 'axios';

export const getCategories = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/category');
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: GET_CATEGORIES, 
            payload: response.data.categories 
        });

        window.localStorage.setItem("userCategories", JSON.stringify());
    } catch (err) {
        console.log('getCategories API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};

export const createCategory = formData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        dispatch({ type: START_LOADING });
        const response = await axios.post('/api/category', formData, config);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_SUCCESS_MESSAGE, 
            payload: response.data.successMessage, 
        });
        dispatch({ 
            type: CREATE_CATEGORY, 
            payload: response.data.category 
        });
        
        window.localStorage.setItem("userCategories", JSON.stringify(formData));
    } catch (err) {
        console.log('createCategory API Error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ 
            type: SHOW_ERROR_MESSAGE, 
            payload: err.response.data.errorMessage, 
        });
    }
};

export const deleteCategory = categoryId => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.delete(`/api/category/${categoryId}`);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: DELETE_CATEGORY,
            payload: response.data,
        });

        window.localStorage.setItem("userCategories", JSON.stringify(categoryId));
    } catch (err) {
        console.log('deleteCategory API error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: err.response.data.errorMessage,
        });
    }
};