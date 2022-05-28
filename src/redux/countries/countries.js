// Base URL

const URL = 'https://corona.lmao.ninja/v3/covid-19/countries';

// Default State

const initialState = {
  status: 'LOADING',
  countries: [],
  error: null,
};

// Action Types

const FETCH_COUNTRIES = 'tracker-covid-19/countries/FETCH_COUNTRIES';
const FETCH_COUNTRIES_ERROR = 'tracker-covid-19/countries/FETCH_COUNTRIES_ERROR';
const FETCH_COUNTRIES_LOADING = 'tracker-covid-19/countries/FETCH_COUNTRIES_LOADING';

// Redux Actions

const getLoadingAction = () => ({
  type: FETCH_COUNTRIES_LOADING,
});

const getSuccessAction = (countries) => ({
  type: FETCH_COUNTRIES,
  payload: countries,
});

const getErrorAction = (error) => ({
  type: FETCH_COUNTRIES_ERROR,
  payload: error,
});

// Redux Thunks (nested functions)

export const getCountries = (location) => (dispatch) => {
  dispatch(getLoadingAction());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const newCountries = data.filter((country) => country.continent === location)
        .map((country) => ({
          name: country.country,
          deaths: country.deaths,
        }));
      dispatch(getSuccessAction(newCountries));
    })
    .catch((error) => {
      getErrorAction((JSON.stringify(error.message)));
    });
};

// Redux Reducer (pure functions)

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_LOADING:
      return {
        ...state,
        status: 'LOADING',
      };
    case FETCH_COUNTRIES:
      return {
        ...state,
        status: 'SUCCESS',
        countries: action.payload,
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        status: 'ERROR',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
