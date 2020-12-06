import {useEffect} from 'react';
import {getLocations} from '../api/location';
import {useLocationCtx} from '../store/location';

export const useGetLocations = () => {
  const {actions} = useLocationCtx();
  useEffect(() => {
    const asyncFunc = async () => {
      const result = await getLocations();
      actions.setLocations(result.data.reverse());
    };
    asyncFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
