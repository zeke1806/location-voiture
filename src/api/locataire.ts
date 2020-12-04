import axios from 'axios';
import {BASE_URL} from '../configs';
import {IFormLocataire} from '../types';

const URL = BASE_URL + '/locataire';

export const getLocataires = () => {
  return axios.get(`${URL}`);
};

export const getLocataireById = (id: number) => {
  return axios.get(`${URL}/${id}`);
};

export const createLocataire = (data: IFormLocataire) => {
  return axios.post(`${URL}`, data);
};

export const updateLocataire = (id: number, data: IFormLocataire) => {
  return axios.put(`${URL}/${id}`, data);
};

export const delLocataire = (id: number) => {
  return axios.delete(`${URL}/${id}`);
};
