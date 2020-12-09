import {useImmer} from 'use-immer';
import {udpateLocation} from '../api/location';
import {useLocationCtx} from '../store/location';
import {IFormLocation, ILocation} from '../types';

export const useUpdateLocation = (toUpdate: ILocation) => {
  const {actions} = useLocationCtx();
  const [form, setForm] = useImmer<IFormLocation>({
    locataire_id: toUpdate.idLocataire,
    voiture_id: toUpdate.idVoiture,
    nbJour: toUpdate.nbJour,
    date: toUpdate.date,
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
    await udpateLocation(toUpdate.idLouer, form);
    const data: ILocation = {
      ...toUpdate,
      idVoiture: form.voiture_id,
      idLocataire: form.locataire_id,
      nbJour: form.nbJour,
      date: form.date,
    };
    actions.updateLocation(data);
  };

  return {
    form,
    handleChange,
    submit,
  };
};
