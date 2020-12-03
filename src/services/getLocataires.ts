import {useEffect} from 'react';
import {getLocataires} from '../api/locataire';
import {useLocataireCtx} from '../store/locataire';

export const useGetLocataires = () => {
  const {actions} = useLocataireCtx();
  useEffect(() => {
    const asyncFunc = async () => {
      const result = await getLocataires();
      actions.setLocataires(result.data);
    };
    asyncFunc();
  }, [actions]);
};
