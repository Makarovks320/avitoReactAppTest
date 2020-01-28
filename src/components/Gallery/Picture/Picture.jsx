import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Picture.module.css';


const Picture = (props) => {
  let path = '/modal/' + props.id;
  return (
    <div className={s.picture}>
      <NavLink to={path} className={s.item} onClick={() => props.openPhotoCard(props.id)}>
        <img src={props.url} alt='картинка' width='100%'/>
      </NavLink>
    </div>
  );
};
  
  export default Picture;