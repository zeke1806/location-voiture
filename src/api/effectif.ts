import axios from 'axios';
import {BASE_URL} from '../configs';

export const getEffectif = (dateDebut: string, dateFin: string) => {
  return axios.get(`${BASE_URL}/effectif/${dateDebut}/${dateFin}`);
};
