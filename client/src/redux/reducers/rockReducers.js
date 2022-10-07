import { 
    CREATE_ROCK, 
    GET_STONES,
    GET_STONE, 
    DELETE_ROCK, 
} from '../constants/rockConstants';

const INITIAL_STATE = {
    stones: [],
};

if (localStorage.getItem('stones')) {
    INITIAL_STATE.stones = JSON.parse(
        localStorage.getItem('stones')
    );    
} else {
    INITIAL_STATE.stones = [];
}

const rockReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_ROCK:
            return {
                stones: [...state.stones, action.payload],
            };
        case GET_STONES: 
            return {
                stones: [...action.payload],
            };
        case GET_STONE:
			return {
				rock: action.payload,
			};
        case DELETE_ROCK:
            return {
                stones: state.stones.filter(
                    r => r._id !== action.payload._id
                ),
            };    
        default: 
            return state;    
    }
};

export default rockReducer;