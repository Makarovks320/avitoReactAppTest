import {setGalleryAC, openPhotoCardThunk} from './../../redux/appReducer';
import {connect} from 'react-redux';
import Gallery from './Gallery';


let mapStateToProps = (state) => {
  return {
    pictures: state.gallery.pictures
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
  setGallery: (pictures) => {
    dispatch(setGalleryAC(pictures))
  },
  openPhotoCard: (id) => {
    dispatch(openPhotoCardThunk(id))
  }
  }
};
const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;