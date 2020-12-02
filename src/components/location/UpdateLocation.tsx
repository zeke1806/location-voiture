import React, {FC} from 'react';
import Space from '../public/Space';
import FormLocation from './FormLocation';

const UpdateLocation: FC = () => {
  return (
    <>
      <Space />
      <FormLocation type="update" />
    </>
  );
};

export default UpdateLocation;
