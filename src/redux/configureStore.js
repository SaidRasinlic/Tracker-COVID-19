import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import continentsReducer from './continents/continents';
import countriesReducer from './countries/countries';

const rootReducer = combineReducers({
  countries: countriesReducer,
  continents: continentsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
