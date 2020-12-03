import axios from 'axios';
import {BASE_URL} from '../configs';

const URL = BASE_URL + '/voiture';

export const getVoitures = () => {
  return axios.get(`${URL}`);
};

export const getVoitureById = (id: number) => {
  return axios.get(`${URL}/find/${id}`);
};

export interface ICreateVoitureData {
  designation: string;
  loyer: number;
}
export const createVoiture = (data: ICreateVoitureData) => {
  return axios.post(`${URL}`, data);
};

export interface IUpdateVoitureData {
  designation: string;
  loyer: string;
}
export const udpateVoiture = (id: number, data: IUpdateVoitureData) => {
  return axios.put(`${URL}/${id}`, data);
};

export const delVoiture = (id: number) => {
  return axios.delete(`${URL}/${id}`);
};

export const searchVoiture = (search: string) => {
  return axios.get(`${URL}/${search}`);
};
