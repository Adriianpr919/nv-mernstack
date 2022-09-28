import { 
    GET_GOLDS, 
    CREATE_GOLDEN, 
} from '../constants/goldConstants';

const INITIAL_STATE = {
    golds: [],
};

const goldReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_GOLDS: 
            return {
                ...state,
                golds: action.payload,
            };
        case CREATE_GOLDEN:
            return {
                ...state,
                golds: [...state.golds, action.payload],
            };   
        default: 
            return state;    
    }
};

export default goldReducers;