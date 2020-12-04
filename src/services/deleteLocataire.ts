import {delLocataire} from '../api/locataire';
import {useLocataireCtx} from '../store/locataire';

export const useDeleteLocataire = (id: number) => {
  const {actions} = useLocataireCtx();

  const submit = async () => {
    await delLocataire(id);
    actions.deleteLocataire(id);
  };

  return {
    submit,
  };
};
