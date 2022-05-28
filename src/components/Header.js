import React from 'react';
import { FaBars, FaRegSun, FaMicrophone } from 'react-icons/fa';
import style from './Header.module.scss';

const Header = () => (
  <header>
    <nav className={style.nav}>
      <ul className={style.navItems}>
        <li><FaBars className={style.icon} /></li>
        <li id={style.title}>Tracker-COVID-19</li>
        <li>
          <FaMicrophone className={style.icon} />
          <FaRegSun className={style.icon} />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
