import React from 'react';
import { PropTypes } from 'prop-types';

const SubHeader = (props) => {
  const { title } = props;
  const style = {
    color: '#fff',
    background: '#d7447d',
    margin: '0',
    filter: 'drop-shadow',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div>
      <h2 style={style}>{title}</h2>
    </div>
  );
};

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeader;
