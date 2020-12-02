import React, {FC} from 'react';
import Space from '../public/Space';
import FormVoiture from './FormVoiture';

const UpdateVoiture: FC = () => {
  return (
    <>
      <Space />
      <FormVoiture type="update" />
    </>
  );
};

export default UpdateVoiture;
