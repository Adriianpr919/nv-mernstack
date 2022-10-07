import { 
    CREATE_SIZED, 
    GET_SIZES,
    GET_SIZE, 
    DELETE_SIZED, 
} from '../constants/sizedConstants';

const INITIAL_STATE = {
    sizes: [],
};

if (localStorage.getItem('sizes')) {
    INITIAL_STATE.sizes = JSON.parse(
        localStorage.getItem('sizes')
    );
} else {
    INITIAL_STATE.sizes = [];
}

const sizedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_SIZED:
            return {
                sizes: [...state.sizes, action.payload],
            };
        case GET_SIZES: 
            return {
                sizes: [...action.payload],
            };
        case GET_SIZE:
            return {
                sized: action.payload,
            };
        case DELETE_SIZED:
            return {
                sizes: state.sizes.filter(
                    s => s._id !== action.payload._id
                ),
            };    
        default: 
            return state;    
    }
};

export default sizedReducer;