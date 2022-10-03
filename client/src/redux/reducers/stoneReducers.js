import { 
    GET_STONES,
    CREATE_ROCK, 
} from '../constants/stoneConstants';

const INITIAL_STATE = {
    stones: [],
};

const rockReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_STONES: 
            return {
                ...state,
                stones: action.payload,
            };  
        case CREATE_ROCK:
            return {
                ...state,
                stones: [...state.stones, action.payload],
            };
        default: 
            return state;    
    }
};

export default rockReducers;