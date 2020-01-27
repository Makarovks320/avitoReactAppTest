import {openPopupAC} from './../../redux/appReducer';
import {connect} from 'react-redux'
import Gallery from './Gallery'


let mapStateToProps = (state) => {
  return {
    pictures: state.gallery.pictures
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
  sendId: (id) => {
    dispatch(openPopupAC(id))
  }
  }
};
const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;