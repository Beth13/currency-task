import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import currencyReducer from './components/currency/currencyItem.recuder';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(currencyReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
