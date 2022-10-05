import { 
    CREATE_SIZE, 
    GET_SIZES,
    GET_SIZE, 
    DELETE_SIZE, 
} from '../constants/sizeConstants';

const INITIAL_STATE = {
    sizes: [],
};

const sizeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_SIZE:
            return {
                sizes: [...state.sizes, action.payload],
            };
        case GET_SIZES: 
            return {
                sizes: [...action.payload],
            };
        case GET_SIZE:
            return {
                size: action.payload,
            };
        case DELETE_SIZE:
            return {
                sizes: state.sizes.filter(
                    s => s._id !== action.payload._id
                ),
            };    
        default: 
            return state;    
    }
};

export default sizeReducer;