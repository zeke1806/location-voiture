import axios from 'axios';
import {BASE_URL} from '../configs';

const URL = BASE_URL + '/location';

export const getLocations = () => {
  return axios.get(`${URL}`);
};

export const getLocationById = (id: number) => {
  return axios.get(`${URL}/${id}`);
};

export interface ICreateLocationData {
  locataire_id: number;
  voiture_id: number;
  nbJour: number;
  date: string; // annee-moi-jour 2005-09-12T21
}
export const createLocation = (data: ICreateLocationData) => {
  return axios.post(`${URL}`, data);
};

export interface IUpdateLocationData {
  locataire_id: number;
  voiture_id: number;
  nbJour: number;
  date: string;
}
export const udpateLocation = (id: number, data: IUpdateLocationData) => {
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
