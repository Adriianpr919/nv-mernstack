import { 
    CREATE_STONE, 
    GET_STONES,
    GET_STONE, 
    DELETE_STONE, 
} from '../constants/stoneConstants';

const INITIAL_STATE = {
    stones: [],
};

const stoneReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_STONE:
            return {
                stones: [...state.stones, action.payload],
            };
        case GET_STONES: 
            return {
                stones: [...action.payload],
            };
        case GET_STONE:
			return {
				stone: action.payload,
			};
        case DELETE_STONE:
            return {
                stones: state.stones.filter(
                    r => r._id !== action.payload._id
                ),
            };    
        default: 
            return state;    
    }
};

export default stoneReducer;