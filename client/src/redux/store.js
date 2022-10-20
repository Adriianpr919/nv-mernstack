import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import categoryReducer from './reducers/categoryReducers';
import sizedReducer from './reducers/sizedReducers';
import goldenReducer from './reducers/goldenReducers';
import rockReducer from './reducers/rockReducers';
import productReducer from './reducers/productReducers';
import filterReducer from './reducers/filterReducers';
import cartReducer from './reducers/cartReducers';
import orderReducer from './reducers/orderReducers';

const reducer = combineReducers({
    loading: loadingReducer,
    messages: messageReducer,
    categories: categoryReducer,
    sizeds: sizedReducer,
    goldens: goldenReducer,
    rocks: rockReducer,
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