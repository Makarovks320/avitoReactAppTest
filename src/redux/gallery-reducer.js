const REVERSE = 'REVERSE';

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
const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVERSE:
      state.pictures.reverse();
      alert(action.id);
      return state;
    default: 
      return state;
  }
};

export const reverseAC = (id) => { 
  return {type: REVERSE, id: id}
};

export default galleryReducer;