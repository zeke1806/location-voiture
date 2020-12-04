import {useImmer} from 'use-immer';
import {createLocataire} from '../api/locataire';
import {useLocataireCtx} from '../store/locataire';
import {IFormLocataire} from '../types';

export const useCreateLocataire = () => {
  const {actions} = useLocataireCtx();
  const [form, setForm] = useImmer<IFormLocataire>({
    nom: '',
    adresse: '',
  });

  const handleChange = (key: keyof IFormLocataire, value: string) => {
    setForm((draft) => {
      draft[key] = value;
    });
  };

  const submit = async () => {
    const result = await createLocataire(form);
    actions.addLocataires({
      ...result.data,
      idLocataire: result.data.id,
    });
    setForm((draft) => {
      draft.nom = '';
      draft.adresse = '';
    });
  };

  return {
    form,
    submit,
    handleChange,
  };
};
