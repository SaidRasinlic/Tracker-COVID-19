import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoWidget from '../components/InfoWidget';
import Countries from '../components/Countries';
import SubPageHeader from '../components/SubPageHeader';
import SubHeader from '../components/SubHeader';

const ContinentsPage = () => {
  const { continent } = useParams();
  const [deathCases, setDeathCases] = useState(null);

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v3/covid-19/continents/${continent}`)
      .then((response) => response.json())
      .then((data) => {
        setDeathCases(data.deaths);
      })
      .catch((error) => {
        setDeathCases(error.message);
      });
  }, []);

  return (
    <>
      <SubPageHeader />
      <InfoWidget location={continent} death={deathCases} />
      <SubHeader title="Country Death Stats" />
      <Countries location={continent} />
    </>
  );
};

export default ContinentsPage;
