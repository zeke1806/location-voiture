import {useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {useUpdateLocation} from '../../services/updateLocation';
import {ILocation} from '../../types';
import Space from '../public/Space';
import FormLocation from './FormLocation';

const UpdateLocation: FC = () => {
  const location = useRoute().params as ILocation;
  const {form, submit, handleChange} = useUpdateLocation({
    ...location,
    loyer: location.loyer / location.nbJour,
  });
  return (
    <>
      <Space />
      <FormLocation
        type="update"
        value={form}
        onChange={handleChange}
        submit={submit}
      />
    </>
  );
};

export default UpdateLocation;
