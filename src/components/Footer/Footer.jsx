import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
    <div className={s.line}></div>
    <div className={s.copyright}>
      <span>© 2018-2019</span>
    </div>
  </footer>
  )
}

export default Footer;