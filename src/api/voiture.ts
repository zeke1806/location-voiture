import axios from 'axios';
import {BASE_URL} from '../configs';
import {IFormVoiture} from '../types';

const URL = BASE_URL + '/voiture';

export const getVoitures = () => {
  return axios.get(`${URL}`);
};

export const getVoitureById = (id: number) => {
  return axios.get(`${URL}/find/${id}`);
};

export const createVoiture = (data: IFormVoiture) => {
  return axios.post(`${URL}`, data);
};

export const udpateVoiture = (id: number, data: IFormVoiture) => {
  return axios.put(`${URL}/${id}`, data);
};

export const delVoiture = (id: number) => {
  return axios.delete(`${URL}/${id}`);
};

export const searchVoiture = (search: string) => {
  return axios.get(`${URL}/${search}`);
};
