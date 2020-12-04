import {useImmer} from 'use-immer';
import {updateLocataire} from '../api/locataire';
import {useLocataireCtx} from '../store/locataire';
import {IFormLocataire, ILocataire} from '../types';

export const useUpdateLocataire = (initialData: ILocataire) => {
  const {actions} = useLocataireCtx();
  const [form, setForm] = useImmer<IFormLocataire>({
    nom: initialData.nom,
    adresse: initialData.adresse,
  });

  const handleChange = (key: keyof IFormLocataire, value: string) => {
    setForm((draft) => {
      draft[key] = value;
    });
  };

  const submit = async () => {
    const result = await updateLocataire(initialData.idLocataire, form);
    actions.updateLocataire(result.data.id, {
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
    handleChange,
    submit,
  };
};
