import {connect} from 'react-redux'
import PhotoCard from './PhotoCard'
import {putCommentThunkCreator} from '../../../redux/appReducer';


let mapStateToProps = (state) => {
  return {
    url: state.gallery.photoCardData.url,
    id: state.gallery.photoCardData.id
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    putComment: (commentData) => {
    dispatch(putCommentThunkCreator(commentData))
  }
  }
};
const PhotoCardContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoCard);

export default PhotoCardContainer;