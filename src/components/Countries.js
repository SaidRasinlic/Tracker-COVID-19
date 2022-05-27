import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getCountries } from '../redux/countries/countries';
import FilteredCountries from './FilteredCountries';

const Countries = (props) => {
  const countries = useSelector((state) => state.countries);
  const { location } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries(location));
  }, []);

  let content;

  if (countries.status === 'LOADING') {
    content = (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  } else if (countries.status === 'SUCCESS') {
    content = <FilteredCountries countries={countries.countries} />;
  } else {
    content = (
      <h2>
        Error:
        {countries.error}
      </h2>
    );
  }

  return (
    <>
      {content}
    </>
  );
};

Countries.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Countries;
