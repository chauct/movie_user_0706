import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import bookingReducer from 'features/booking/bookingSlice';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  booking: bookingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
