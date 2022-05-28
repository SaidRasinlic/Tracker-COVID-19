import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubPageHeader from '../components/SubPageHeader';
import style from './CountriesPage.module.scss';

const CountriesPage = () => {
  const { country } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${country}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      });
  });

  return (
    <>
      <SubPageHeader />
      {countryData
        ? (
          <>
            <div className={style.wrapper}>
              <div className={style.heroWrapper}>
                <div className={style.flagWrapper}>
                  <img
                    className={style.flagImg}
                    src={countryData.countryInfo.flag}
                    alt={countryData.country}
                  />
                </div>
                <div>
                  <h2 className={style.heroCountry}>{countryData.country}</h2>
                  <h5 className={style.heroPopulation}>{`Population: ${countryData.population}`}</h5>
                </div>
              </div>
              <div className={style.row}>
                <h2>Active</h2>
                <h5>{countryData.active}</h5>
              </div>
              <div className={style.row}>
                <h2>Cases</h2>
                <h5>{countryData.cases}</h5>
              </div>
              <div className={style.row}>
                <h2>Today Cases</h2>
                <h5>{countryData.todayCases}</h5>
              </div>
              <div className={style.row}>
                <h2>Cases per Million</h2>
                <h5>{countryData.casesPerOneMillion}</h5>
              </div>
              <div className={style.row}>
                <h2>Deaths</h2>
                <h5>{countryData.deaths}</h5>
              </div>
              <div className={style.row}>
                <h2>Today Deaths</h2>
                <h5>{countryData.deathsPerOneMillion}</h5>
              </div>
              <div className={style.row}>
                <h2>Deaths per Million</h2>
                <h5>{countryData.todayCases}</h5>
              </div>
              <div className={style.row}>
                <h2>Continent</h2>
                <h5>{countryData.continent}</h5>
              </div>
            </div>
          </>
        ) : <h2>Loading...</h2>}
    </>
  );
};

export default CountriesPage;
