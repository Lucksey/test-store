import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import productsReducer from './products-reducer'

const rootReducers = combineReducers({
    products: productsReducer,

});

const store = createStore(rootReducers, applyMiddleware(thunk));

window.store = store;

export default store;
