import {useImmer} from 'use-immer';
import {IFormVoiture} from '../types';
import {createVoiture} from '../api/voiture';
import {useVoitureCtx} from '../store/voiture';

export const useCreateVoiture = () => {
  const {actions} = useVoitureCtx();
  const [form, setForm] = useImmer<IFormVoiture>({
    designation: '',
    loyer: 0,
  });

  const submit = async () => {
    const result = await createVoiture(form);
    actions.addVoiture({...result.data, idVoiture: result.data.id});
  };

  const handleChange = (key: keyof IFormVoiture, value: string) => {
    setForm((draft) => {
      if (key === 'designation') {
        draft.designation = value;
      }
      if (key === 'loyer') {
        draft.loyer = Number(value);
      }
      setForm((draft) => {
        draft.loyer = 0;
        draft.designation = '';
      });
    });
  };

  return {
    form,
    submit,
    handleChange,
  };
};
