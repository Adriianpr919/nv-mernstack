import { 
    CREATE_GOLDEN, 
    GET_GOLDS,
    GET_GOLD, 
    DELETE_GOLDEN, 
} from '../constants/goldenConstants';

const INITIAL_STATE = {
    golds: [],
};

const goldenReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_GOLDEN:
            return {
                golds: [...state.golds, action.payload],
            };
        case GET_GOLDS: 
            return {
                golds: [...action.payload],
            };
        case GET_GOLD:
            return {
                golden: action.payload,
            };
        case DELETE_GOLDEN:
            return {
                golds: state.golds.filter(
                    golden => golden._id !== action.payload._id
                ),
            };    
        default: 
            return state;    
    }
};

export default goldenReducer;