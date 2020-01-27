import React from 'react';
import s from './Comment.module.css';

const Comment = () => {
  return (
    <div className={s.wrapper}>
      <span>Дата</span>
      <p>Текст комментария бла бла</p>
    </div>
  )
}
export default Comment;
