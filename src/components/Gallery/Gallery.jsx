import React from 'react';
import s from './Gallery.module.css';
import Picture from './Picture/Picture';
import Axios from 'axios';

class Gallery extends React.Component {
  componentDidMount () {
    Axios.get("https://boiling-refuge-66454.herokuapp.com/images")
    .then(response => {this.props.setGallery(response.data)});
  }
  render() {
    let pictureElements = this.props.pictures.map( p => <Picture key={p.id} url={p.url} id={p.id} sendId={this.props.sendId}/>)
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