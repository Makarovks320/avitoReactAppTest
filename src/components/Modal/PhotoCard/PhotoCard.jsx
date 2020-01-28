import React from 'react';
import s from './PhotoCard.module.css';
import CommentsContainer from './Comments/CommentsContainer';
import CardForm from './CardForm/CardForm';

const PhotoCard = (props) => {
  const putComment = (formData) => {
    let date = new Date().getTime();
    props.putComment({id: props.id, ...formData, date});
  }
  return (
    <div className={s.container}>
      <div className={s.picture}>
        <img src={props.url} alt='картинка' width='100%'/>
      </div>
      <CommentsContainer />
      <CardForm onSubmit={putComment}/>
    </div>
  )
}
export default PhotoCard;
