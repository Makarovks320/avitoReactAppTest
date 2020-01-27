const OPEN_POPUP = 'OPEN_POPUP';
const CLOSE_POPUP ='CLOSE_POPUP';

const initialState = {
  pictures: [
    {id: 237, url: "https://picsum.photos/id/237/300/200"},
    {id: 238, url: "https://picsum.photos/id/238/300/200"},
    {id: 239, url: "https://picsum.photos/id/239/300/200"},
    {id: 240, url: "https://picsum.photos/id/240/300/200"},
    {id: 241, url: "https://picsum.photos/id/241/300/200"},
    {id: 242, url: "https://picsum.photos/id/242/300/200"}
    ],
  modal: false,
  comments: []
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

export default appReducer;