import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={s.headerWrapper}>
        <h1>Test App</h1>
      </div>
    </header>
  )
}

export default Header;