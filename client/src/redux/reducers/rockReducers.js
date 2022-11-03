import {
    GET_ROCKS,
    CREATE_ROCK,
    DELETE_ROCK,
} from '../constants/rockConstants';

const INITIAL_STATE = {
    rocks: [],
};

if (localStorage.getItem('rocks')) {
    INITIAL_STATE.rocks = JSON.parse(
        localStorage.getItem('rocks')
    );
} else {
    INITIAL_STATE.rocks = [];
}

const rockReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ROCKS:
            return {
                ...state,
                rocks: action.payload,
            };
        case CREATE_ROCK:
            return {
                ...state,
                rocks: [...state.rocks, action.payload],
            };
        case DELETE_ROCK:
            return {
                rocks: state.rocks.filter(
                    (r) => r._id !== action.payload._id
                ),
            };
        default:
            return state;
    }
};

export default rockReducer;