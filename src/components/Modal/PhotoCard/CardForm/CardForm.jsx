import React from 'react';
import { Form, Button } from 'react-bootstrap';
import s from './CardForm.module.css'

const CardForm = () => {
  return (
    <Form onSubmit={() => alert('submit')}>
      <Form.Control className={s.input} type="text" placeholder="Ваше имя" />
      <Form.Control className={s.input} type="text" placeholder="Ваш комментарий" />
      <Button className={s.submit} variant="primary" type="submit">Оставить комментарий</Button>
    </Form>
  )
}

export default CardForm;