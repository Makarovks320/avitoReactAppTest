import {appAPI} from '../api/api'
const OPEN_POPUP = 'OPEN_POPUP';
const CLOSE_POPUP = 'CLOSE_POPUP';
const SET_GALLERY = 'SET_GALLERY';
const SET_PHOTO_CARD_DATA = 'SET_PHOTO_CARD_DATA';


const initialState = {
  pictures: [],
  modal: false,
  photoCardData: {
    "id": '',
    "url": "",
    "comments": []
  }
}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      return {
        ...state,
        modal: !state.modal
      }
    case CLOSE_POPUP:
      return {
        ...state,
        modal: !state.modal
      }
    case SET_GALLERY:
      return {
        ...state,
        pictures: [...action.pictures]
      }
    case SET_PHOTO_CARD_DATA:
      return {
        ...state,
        photoCardData: action.data
      }
    default: 
      return state;
  }
};

export const openPopupAC = () => { 
  return {type: OPEN_POPUP}
};
export const closePopupAC = () => {
  return {type: CLOSE_POPUP}
}
export const setGalleryAC = (pictures) => {
  return {type: SET_GALLERY, pictures: pictures}
}
export const setPhotoCardDataAC = (data) => {
  return {type: SET_PHOTO_CARD_DATA, data: data}
}
export const openPhotoCardThunk =(id) => {
  return (dispatch) => {
  appAPI.getPhotoCardData(id).then(data => {
    dispatch(setPhotoCardDataAC(data))
    dispatch(openPopupAC())
  })
}}


export default appReducer;