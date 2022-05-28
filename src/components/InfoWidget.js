import React from 'react';
import PropTypes from 'prop-types';
import { BallTriangle } from 'react-loading-icons';
import style from './InfoWidget.module.scss';

const InfoWidget = (props) => {
  const { death, location } = props;

  return (
    <div className={style.widgetWrapper}>
      <div className={style.imgWrapper}>
        <img src={`../assets/images/${location}.png`} alt={location} className={style.worldImg} />
      </div>
      <div className={style.widgetInfo}>
        <h3 className={style.heroTitle}>
          {`${location}`}
        </h3>
        {death ? (
          <h4 className={style.heroStats}>
            {`${death} deaths`}
          </h4>
        )
          : <h4><BallTriangle /></h4>}
      </div>
    </div>
  );
};

InfoWidget.propTypes = {
  death: PropTypes.number,
  location: PropTypes.string.isRequired,
};

InfoWidget.defaultProps = {
  death: null,
};

export default InfoWidget;
