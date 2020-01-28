import React from 'react';
import s from './CardForm.module.css'
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { Input } from '../../../common/FormsControls/FormsControls';
import {minLengthCreator, required} from '../../../../validators/validators';

const minLength2 = minLengthCreator(2);
const CardForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field className={s.input} name="name" placeholder="Ваше имя" component={Input}
              validate={[minLength2, required]}/>
      <Field className={s.input} name="comment" placeholder="Ваш комментарий" component={Input}
              validate={[minLength2, required]}/>
      <Field className={s.submit} component="button">Оставить комментарий</Field>
    </form>
  )
}
const CardReduxForm = reduxForm({form: 'cardForm'})(CardForm);

export default CardReduxForm;