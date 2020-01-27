import React from 'react';
import s from './PhotoCard.module.css'
import { Form, Button } from 'react-bootstrap';
import CommentsContainer from './Comments/CommentsContainer';

const PhotoCard = (props) => {
  return (
    <div className={s.container}>
      <div className={s.picture}>
        <img src={props.url} alt='картинка' width='100%'/>
      </div>
      <CommentsContainer />
      <Form onSubmit={() => alert('submit')}>
        <Form.Control className={s.input} type="text" placeholder="Ваше имя" />
        <Form.Control className={s.input} type="text" placeholder="Ваш комментарий" />
        <Button className={s.submit} variant="primary" type="submit">Оставить комментарий</Button>
      </Form>
    </div>
  )
}
export default PhotoCard;
