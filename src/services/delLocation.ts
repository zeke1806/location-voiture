import {delLocation} from '../api/location';
import {useLocationCtx} from '../store/location';

export const useDelLocation = (id: number) => {
  const {actions} = useLocationCtx();
  const submit = async () => {
    await delLocation(id);
    actions.delLocation(id);
  };
  return {
    submit,
  };
};
