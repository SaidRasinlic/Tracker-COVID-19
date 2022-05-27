import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BallTriangle } from 'react-loading-icons';
import { getContinents } from '../redux/continents/continents';
import ContinentWidget from './ContinentWidget';
import style from './Continents.module.scss';

const Continents = () => {
  const continents = useSelector((state) => state.continents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  let content;
  if (continents.status === 'LOADING') {
    content = (
      <div>
        <h4>
          <BallTriangle />
        </h4>
      </div>
    );
  } else if (continents.status === 'SUCCESS') {
    content = (
      <div className={style.continentsWrapper}>
        {
          continents.continents.map((continent) => (
            <ContinentWidget
              key={continent.name}
              name={continent.name}
              deaths={continent.deaths}
              countries={continent.countries}
            />
          ))
        }
      </div>
    );
  } else {
    content = (
      <h2>
        Error:
        {continents.error}
      </h2>
    );
  }
  return (
    <>
      { content }
    </>
  );
};

export default Continents;
