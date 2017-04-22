import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root';
 
let store = {};
if (typeof window !== "undefined") {
    store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
}
else {
   store = createStore(rootReducer,applyMiddleware(thunk))
}

export default store;