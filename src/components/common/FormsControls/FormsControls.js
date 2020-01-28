import React from 'react';
import s from './FormsControls.module.css';

const FormsControl = ({meta: {touched, error}, children}) => {
  const  isError = (error && touched);
  return (
    <div className={isError ? s.error : ''} style={{position: 'relative'}}>
      {children}
      { isError && <span style={{color: 'red', position: 'absolute', right: '5px', bottom: '27px'}}>{error}</span>}
    </div>
  );
};

export const Input = (props) => {
  const {input, meta, ...restProps} = props;
  let newMeta = {};
  for (let key in meta) {
    newMeta[key.toLowerCase()] = meta[key] + ''
  }
  return <FormsControl {...props}>
          <input {...input} {...newMeta} {...restProps} />
        </FormsControl>
};