import {useEffect} from 'react';
import {getVoitures} from '../api/voiture';
import {useVoitureCtx} from '../store/voiture';

export const useGetVoitures = () => {
  const {actions} = useVoitureCtx();
  useEffect(() => {
    const asyncFunc = async () => {
      const result = await getVoitures();
      actions.setVoitures(result.data.reverse());
    };
    asyncFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
