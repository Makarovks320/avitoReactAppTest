import React from 'react';
import s from './Gallery.module.css';
import Picture from './Picture/Picture';

const Gallery = (props) => {
  let pictureElements = props.pictures.map( p => <Picture key={p.id} url={p.url} id={p.id} sendId={props.sendId}/>)
return (
  <div  className={s.wrapper}>
    <div className={s.gallery}>
      {pictureElements}
    </div>
  </div>
)
}

export default Gallery;