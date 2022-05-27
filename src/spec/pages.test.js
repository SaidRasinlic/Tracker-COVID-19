import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Homepage from '../pages/HomePage';
import ContinentPage from '../pages/ContinentsPage';
import CountryPage from '../pages/CountriesPage';

describe('Testing if all pages render correctly', () => {
  it('Testing Homepage page', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Testing Continent page', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <ContinentPage />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Testing Country Page', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CountryPage />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
