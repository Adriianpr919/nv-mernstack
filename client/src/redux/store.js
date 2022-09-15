import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import categoryReducers from './reducers/categoryReducers';
import sizeReducers from './reducers/sizeReducers';
import goldReducers from './reducers/goldReducers';
import stoneReducers from './reducers/stoneReducers';
import productReducers from './reducers/productReducers';

const reducer = combineReducers({
    loading: loadingReducer,
    messages: messageReducer,
    categories: categoryReducers,   
    categoriesSize: sizeReducers,
    categoriesGold: goldReducers,
    categoriesStone: stoneReducers,
    products: productReducers,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;