import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://boiling-refuge-66454.herokuapp.com/images/'
});
export const appAPI = {
  getGallery() {
    return instance.get()
    .then(response => {
      return response.data;
    })
  },
  getPhotoCardData(id) {
    return instance.get(`${id}`)
    .then(response => {
      return response.data;
    })
  },
  putComment(id, name, comment) {
    return instance.post(`${id}/comments`, {name, comment})
    .then(response => response.status)
  }
}