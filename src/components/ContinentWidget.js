import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import style from './ContinentWidget.module.scss';

const ContinentWidget = (props) => {
  const { name, deaths } = props;

  return (
    <div className={style.continentWrapper}>
      <NavLink className={style.arrowRight} to={`/continent/${name}`}><FaArrowCircleRight /></NavLink>
      <img className={style.continentImg} src={`./assets/images/${name}.png`} alt={name} />
      <div className={style.continentInfo}>
        <h3 className={style.heroTitle}>{name}</h3>
        <h4 className={style.heroStats}>{deaths}</h4>
      </div>
    </div>
  );
};

ContinentWidget.propTypes = {
  name: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
};

export default ContinentWidget;
