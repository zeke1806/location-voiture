import {delVoiture} from '../api/voiture';
import {useVoitureCtx} from '../store/voiture';

export const useDeleteVoiture = (id: number) => {
  const {actions} = useVoitureCtx();
  const submit = async () => {
    await delVoiture(id);
    actions.deleteVoiture(id);
  };
  return {submit};
};
