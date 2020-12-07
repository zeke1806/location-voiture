import {useImmer} from 'use-immer';
import {IFormLocation} from '../types';

export const useAddLocation = (voiture_id: number) => {
  const [form, setForm] = useImmer<IFormLocation>({
    voiture_id: voiture_id,
    locataire_id: 0,
    nbJour: 0,
    date: new Date().toISOString(),
  });

  const handleChange = (key: keyof IFormLocation, value: string) => {
    if (key !== 'date') {
      setForm((draft) => {
        draft[key] = Number(value);
      });
    } else {
      setForm((draft) => {
        draft.date = value;
      });
    }
  };

  return {
    form,
    handleChange,
  };
};
