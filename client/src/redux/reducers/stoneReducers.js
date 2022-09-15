import { 
    GET_CATEGORIES, 
    CREATE_CATEGORY 
} from '../constants/stoneConstants';

const INITIAL_STATE = {
    categoriesStone: [],
};

const stoneReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categoriesStone: action.payload,
            };
        case CREATE_CATEGORY:
            return {
                ...state,
                categoriesStone: [...state.categoriesStone, action.payload],
            };    
        default:
            return state;    
    }
};

export default stoneReducers;