import {
    CREATE_GOLDEN,
    GET_GOLDENS,
    GET_GOLDEN,
    DELETE_GOLDEN,
} from '../constants/goldenConstants';

const INITIAL_STATE = {
    goldens: [],
};

if (localStorage.getItem('goldens')) {
    INITIAL_STATE.goldens = JSON.parse(
        localStorage.getItem('goldens')
    );
} else {
    INITIAL_STATE.goldens = [];
}

const goldenReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_GOLDEN:
            return {
                goldens: [...state.goldens, action.payload],
            };
        case GET_GOLDENS:
            return {
                goldens: [...action.payload],
            };
        case GET_GOLDEN:
            return {
                golden: action.payload,
            };
        case DELETE_GOLDEN:
            return {
                goldens: state.goldens.filter(
                    g => g._id !== action.payload._id
                ),
            };
        default:
            return state;
    }
};

export default goldenReducer;