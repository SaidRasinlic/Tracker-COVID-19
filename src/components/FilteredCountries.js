import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import style from './FilteredCountries.module.scss';

const FilteredCountries = (props) => {
  const { countries } = props;
  const [countryStorage, setCountryStorage] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    setCountryStorage(countries.filter(
      (countryName) => countryName.name.includes(searchName),
    ));
  }, [searchName]);

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div className={style.countriesWrapper}>
      <div className={style.searchCover}>
        <input className={style.searchName} type="text" value={searchName} placeholder="Country name" onChange={handleChange} />
      </div>
      {
        countryStorage.map((country) => (
          <div className={style.countryInfo} key={country.name}>
            <h2 className={style.heroTitle}>{country.name}</h2>
            <h5 className={style.heroStats}>{`${country.deaths} deaths`}</h5>
            <NavLink to={`/country/${country.name}`}><FaArrowCircleRight className={style.icon} /></NavLink>
          </div>
        ))
      }
    </div>
  );
};

FilteredCountries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    deaths: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default FilteredCountries;
