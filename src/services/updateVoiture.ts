import {useImmer} from 'use-immer';
import {IFormVoiture, IVoiture} from '../types';
import {udpateVoiture} from '../api/voiture';
import {useVoitureCtx} from '../store/voiture';

export const useUpdateVoiture = (toUpdate: IVoiture) => {
  const {actions} = useVoitureCtx();
  const [form, setForm] = useImmer<IFormVoiture>({
    designation: toUpdate.designation,
    loyer: toUpdate.loyer,
  });

  const handleChange = (key: keyof IFormVoiture, value: string) => {
    if (key === 'designation') {
      setForm((draft) => {
        draft.designation = value;
      });
    }
    if (key === 'loyer') {
      setForm((draft) => {
        draft.loyer = Number(value);
      });
    }
  };

  const submit = async () => {
    const result = await udpateVoiture(toUpdate.idVoiture, form);
    actions.updateVoiture({
      ...result.data,
      idVoiture: result.data.id,
    });
    setForm((draft) => {
      draft.designation = '';
      draft.loyer = 0;
    });
  };

  return {
    form,
    handleChange,
    submit,
  };
};
