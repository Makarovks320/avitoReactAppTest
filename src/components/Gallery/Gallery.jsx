import React from 'react';
import s from './Gallery.module.css';
import Picture from './Picture/Picture';

const Gallery = (props) => {
  debugger;
  let pictureElements = props.pictures.map( p => <Picture url={p.url} id={p.id} reversePictures={props.reversePictures}/>)
return (
  <div  className={s.wrapper}>
    <div className={s.gallery}>
      {pictureElements}
    </div>
  </div>
)
}

export default Gallery;