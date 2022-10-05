import { 
    CREATE_GOLD, 
    GET_GOLDS,
    GET_GOLD, 
    DELETE_GOLD, 
} from '../constants/goldConstants';

const INITIAL_STATE = {
    golds: [],
};

const goldReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_GOLD:
            return {
                golds: [...state.golds, action.payload],
            };
        case GET_GOLDS: 
            return {
                golds: [...action.payload],
            };
        case GET_GOLD:
            return {
                gold: action.payload,
            };
        case DELETE_GOLD:
            return {
                golds: state.golds.filter(
                    g => g._id !== action.payload._id
                ),
            };    
        default: 
            return state;    
    }
};

export default goldReducer;