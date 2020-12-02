import React, {FC} from 'react';
import Space from '../public/Space';
import FormLocataire from './FormLocataire';

const UpdateLocataire: FC = () => {
  return (
    <>
      <Space />
      <FormLocataire type="update" />
    </>
  );
};

export default UpdateLocataire;
