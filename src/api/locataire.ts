import axios from 'axios';
import {BASE_URL} from '../configs';

const URL = BASE_URL + '/locataire';

export const getLocataires = () => {
  return axios.get(`${URL}`);
};

export const getLocataireById = (id: number) => {
  return axios.get(`${URL}/${id}`);
};

export interface ICreateLocataireData {
  nom: string;
  adresse: string;
}
export const createLocataire = (data: ICreateLocataireData) => {
  return axios.post(`${URL}`, data);
};

export interface IUpdateLocataireData {
  nom: string;
  adresse: string;
}
export const updateLocataire = (id: number, data: IUpdateLocataireData) => {
  return axios.put(`${URL}/${id}`, data);
};

export const delLocataire = (id: number) => {
  return axios.delete(`${URL}/${id}`);
};
