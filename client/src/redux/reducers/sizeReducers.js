import { 
    GET_CATEGORIES, 
    CREATE_CATEGORY 
} from '../constants/sizeConstants';

const INITIAL_STATE = {
    categoriesSize: [],
};

const sizeReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categoriesSize: action.payload,
            };
        case CREATE_CATEGORY:
            return {
                ...state,
                categoriesSize: [...state.categoriesSize, action.payload],
            };    
        default:
            return state;    
    }
};

export default sizeReducers;