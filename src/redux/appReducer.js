const OPEN_POPUP = 'OPEN_POPUP';
const CLOSE_POPUP = 'CLOSE_POPUP';
const SET_GALLERY = 'SET_GALLERY';

const initialState = {
  pictures: [],
  modal: false,
  photoCardData: {
    "id": 237,
    "url": "https://picsum.photos/id/237/600/400",
    "comments": [
      { "id": 153, "text": "Крутая фотка","date": 1578054737927 },
      { "id": 154, "text": "Мне нравится", "date": 1578054737927 }
    ]
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
    default: 
      return state;
  }
};

export const openPopupAC = (id) => { 
  return {type: OPEN_POPUP, id: id}
};
export const closePopupAC = () => {
  return {type: CLOSE_POPUP}
}
export const setGalleryAC = (pictures) => {
  return {type: SET_GALLERY, pictures: pictures}
}

export default appReducer;