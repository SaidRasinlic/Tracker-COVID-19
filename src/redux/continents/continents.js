// Base URL
const URL = 'https://corona.lmao.ninja/v3/covid-19/continents';

// Default State
const initialState = {
  continents: [],
  status: 'LOADING',
  error: null,
};

// Action Types

const FETCH_CONTINENTS = 'tracker-covid-19/continents/FETCH_CONTINENTS';
const FETCH_CONTINENTS_ERROR = 'tracker-covid-19/continents/FETCH_CONTINENTS_ERROR';
const FETCH_CONTINENTS_LOADING = 'tracker-covid-19/continents/FETCH_CONTINENTS_LOADING';

// Redux Actions

const getLoadingAction = () => ({
  type: FETCH_CONTINENTS_LOADING,
});

const getSuccessAction = (continents) => ({
  type: FETCH_CONTINENTS,
  payload: continents,
});

const getErrorAction = (error) => ({
  type: FETCH_CONTINENTS_ERROR,
  payload: error,
});

// Redux Thunks (nested functions)

export const getContinents = () => (dispatch) => {
  dispatch(getLoadingAction());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const newContinent = data.map((continent) => ({
        name: continent.continent,
        deaths: continent.deaths,
        countries: continent.countries,
      }));
      dispatch(getSuccessAction(newContinent));
    })
    .catch((error) => {
      dispatch(getErrorAction(JSON.stringify(error.message)));
    });
};

// Redux Reducer (pure functions)

const continentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTINENTS_LOADING:
      return {
        ...state,
        status: 'LOADING',
      };
    case FETCH_CONTINENTS:
      return {
        ...state,
        status: 'SUCCESS',
        continents: action.payload,
      };
    case FETCH_CONTINENTS_ERROR:
      return {
        ...state,
        status: 'ERROR',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default continentsReducer;
