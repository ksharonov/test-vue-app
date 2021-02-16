import axios from 'axios';

export const Hotel = {
  getList: () => {
    return axios
      .get('/hotels');
  },
  getOne: (id: number) => {
    return axios
      .get(`/hotels/${id}`);
  },
  order: (form: {[param: string]: string}) => {
    return axios
      .post(`/hotels`, JSON.stringify(form));
  }
}
