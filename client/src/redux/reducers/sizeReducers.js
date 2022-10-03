import { 
    GET_SIZES,
    CREATE_SIZED, 
} from '../constants/sizeConstants';

const INITIAL_STATE = {
    sizes: [],
};

const sizedReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SIZES: 
            return {
                ...state,
                sizes: action.payload,
            };
        case CREATE_SIZED:
            return {
                ...state,
                sizes: [...state.sizes, action.payload],
            };
        default: 
            return state;    
    }
};

export default sizedReducers;