import {connect} from 'react-redux'
import PhotoCard from './PhotoCard'
// import {addCommentAC} from '../';


let mapStateToProps = (state) => {
  return {
    url: state.gallery.photoCardData.url,
  }
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//   addComment: (id) => {
//     dispatch(addCommentAC(id))
//   }
//   }
// };
const PhotoCardContainer = connect(mapStateToProps, )(PhotoCard);

export default PhotoCardContainer;