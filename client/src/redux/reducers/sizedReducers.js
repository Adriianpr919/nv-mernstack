import {
    CREATE_SIZED,
    GET_SIZEDS,
    GET_SIZED,
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
        case CREATE_SIZED:
            return {
                sizeds: [...state.sizeds, action.payload],
            };
        case GET_SIZEDS:
            return {
                sizeds: [...action.payload],
            };
        case GET_SIZED:
            return {
                sized: action.payload,
            };
        case DELETE_SIZED:
            return {
                sizeds: state.sizeds.filter(
                    s => s._id !== action.payload._id
                ),
            };
        default:
            return state;
    }
};

export default sizedReducer;