import axios from 'axios';
import {BASE_URL} from '../configs';
import {IFormLocation} from '../types';

const URL = BASE_URL + '/location';

export const getLocations = () => {
  return axios.get(`${URL}`);
};

export const getLocationById = (id: number) => {
  return axios.get(`${URL}/${id}`);
};

export const createLocation = (data: IFormLocation) => {
  return axios.post(`${URL}`, data);
};

export const udpateLocation = (id: number, data: IFormLocation) => {
  return axios.put(`${URL}/${id}`, data);
};

export const delLocation = (id: number) => {
  return axios.delete(`${URL}/${id}`);
};

export const getVoitureLocataires = (
  id: number,
  dateDebut: string,
  dateFin: string,
) => {
  return axios.get(`${URL}/${id}/${dateDebut}/${dateFin}`);
};
