import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import InfoWidget from '../components/InfoWidget';
import SubHeader from '../components/SubHeader';
import Continents from '../components/Continents';

const HomePage = () => {
  const [deathCases, setDeathCases] = useState(null);

  useEffect(() => {
    fetch('https://corona.lmao.ninja/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => { setDeathCases(data.deaths); })
      .catch((err) => { setDeathCases(err.message); });
  }, []);

  return (
    <>
      <Header />
      <InfoWidget death={deathCases} location="World" />
      <SubHeader title="Continental Death Stats" />
      <Continents />
    </>
  );
};

export default HomePage;
