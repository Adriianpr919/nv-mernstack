import {
    GET_SIZEDS,
    CREATE_SIZED,
    DELETE_SIZED,
} from '../constants/sizedConstants';

const INITIAL_STATE = {
    sizeds: [],
};

if (localStorage.getItem('sizeds')) {
    INITIAL_STATE.sizeds = JSON.parse(
        localStorage.getItem('sizeds')
    );
} else {
    INITIAL_STATE.sizeds = [];
}

const sizedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SIZEDS:
            return {
                ...state,
                sizeds: action.payload,
            };
        case CREATE_SIZED:
            return {
                ...state,
                sizeds: [...state.sizeds, action.payload],
            };
        case DELETE_SIZED:
            return {
                sizeds: state.sizeds.filter(
                    (s) => s._id !== action.payload._id
                ),
            };
        default:
            return state;
    }
};

export default sizedReducer;