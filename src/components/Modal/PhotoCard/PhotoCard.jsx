import React from 'react';
import s from './PhotoCard.module.css'
import { Form, Button } from 'react-bootstrap';
import Comment from './Comment/Comment';

const PhotoCard = () => {
  return (
    <div className={s.container}>
      <div className={s.picture}>
        <img src='https://picsum.photos/id/239/600/400' alt='картинка' width='100%'/>
      </div>
      <Comment />
      <Form onSubmit={() => alert('submit')}>
        <Form.Control className={s.input} type="text" placeholder="Ваше имя" />
        <Form.Control className={s.input} type="text" placeholder="Ваш комментарий" />
        <Button className={s.submit} variant="primary" type="submit">Оставить комментарий</Button>
      </Form>
    </div>
  )
}
export default PhotoCard;
