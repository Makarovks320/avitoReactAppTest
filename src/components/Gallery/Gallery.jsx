import React from 'react';
import s from './Gallery.module.css';
import Picture from './Picture/Picture';
import {appAPI} from './../../api/api';

class Gallery extends React.Component {
  componentDidMount () {
    appAPI.getGallery()
    .then(data => {this.props.setGallery(data)});
  }
  render() {
    let pictureElements = this.props.pictures.map( p => <Picture key={p.id} url={p.url} id={p.id} openPhotoCard={this.props.openPhotoCard}/>)
    return (
      <div  className={s.wrapper}>
        <div className={s.gallery}>
          {pictureElements}
        </div>
      </div>
)
}
}
export default Gallery;