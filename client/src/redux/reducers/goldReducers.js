import { 
    GET_CATEGORIES, 
    CREATE_CATEGORY, 
} from '../constants/goldConstants';

const INITIAL_STATE = {
    categoriesGold: [],
};

const goldReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categoriesGold: action.payload,
            };
        case CREATE_CATEGORY:
            return {
                ...state,
                categoriesGold: [...state.categoriesGold, action.payload],
            };    
        default:
            return state;    
    }
};

export default goldReducers;