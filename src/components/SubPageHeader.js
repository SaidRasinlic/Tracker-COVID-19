import React from 'react';
import { FaAngleLeft, FaRegSun, FaMicrophone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.scss';

const SubPageHeader = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className={style.nav}>
        <ul className={style.navItems}>
          <li>
            <FaAngleLeft onClick={() => navigate(-1)} className={style.icon} />
          </li>
          <li id={style.title}>Tracker-COVID-19</li>
          <li>
            <FaMicrophone className={style.icon} />
            <FaRegSun className={style.icon} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SubPageHeader;
