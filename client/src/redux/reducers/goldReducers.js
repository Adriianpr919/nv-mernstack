import { 
    GET_CATEGORIES, 
    CREATE_CATEGORY 
} from '../constants/goldConstants';

const INITIAL_STATE = {
    categories: [],
};

const goldReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case CREATE_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload],
            };    
        default:
            return state;    
    }
};

export default goldReducers;