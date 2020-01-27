// import {openPopupAC} from './../../redux/appReducer';
import {connect} from 'react-redux'
import PhotoCard from './PhotoCard'


let mapStateToProps = (state) => {
  return {
    url: state.gallery.photoCardData.url
  }
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//   sendId: (id) => {
//     dispatch(openPopupAC(id))
//   }
//   }
// };
const PhotoCardContainer = connect(mapStateToProps, )(PhotoCard);

export default PhotoCardContainer;