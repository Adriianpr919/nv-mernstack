import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import categoryReducer from './reducers/categoryReducers';
import sizeReducer from './reducers/sizeReducers';
import goldReducer from './reducers/goldReducers';
import stoneReducer from './reducers/stoneReducers';
import productReducer from './reducers/productReducers';
import filterReducer from './reducers/filterReducers';
import cartReducer from './reducers/cartReducers';
import orderReducer from './reducers/orderReducers';

const reducer = combineReducers({
    loading: loadingReducer,
    messages: messageReducer,
    categories: categoryReducer,   
    sizes: sizeReducer,
    golds: goldReducer,
    stones: stoneReducer,
    products: productReducer,
    filters: filterReducer,
    cart: cartReducer,
    order: orderReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;