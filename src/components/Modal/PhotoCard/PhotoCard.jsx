import React from 'react';
import s from './PhotoCard.module.css';
import CommentsContainer from './Comments/CommentsContainer';
import CardForm from './CardForm/CardForm';

const PhotoCard = (props) => {
  return (
    <div className={s.container}>
      <div className={s.picture}>
        <img src={props.url} alt='картинка' width='100%'/>
      </div>
      <CommentsContainer />
      <CardForm/>
    </div>
  )
}
export default PhotoCard;
