import {useImmer} from 'use-immer';
import {createLocation} from '../api/location';
import {useLocationCtx} from '../store/location';
import {IFormLocation} from '../types';
import dayjs from 'dayjs';
import {useVoitureCtx} from '../store/voiture';

export const useAddLocation = (voiture_id: number) => {
  const {actions} = useLocationCtx();
  const {
    state: {voitures},
  } = useVoitureCtx();
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

  const submit = async () => {
    const data = {
      ...form,
      date: dayjs(form.date).format('YYYY-MM-DD'), //2005-09-12T21
    };
    console.log(data);
    const result = await createLocation(data);
    actions.addLocation({
      ...result.data,
      idLouer: result.data.id,
      idLocataire: result.data.locataire_id,
      idVoiture: result.data.voiture_id,
      loyer:
        voitures.find((elt) => elt.idVoiture === voiture_id)!.loyer *
        result.data.nbJour,
    });
  };

  return {
    form,
    handleChange,
    submit,
  };
};
