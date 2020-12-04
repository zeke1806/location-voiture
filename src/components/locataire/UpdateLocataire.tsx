import {useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {useUpdateLocataire} from '../../services/updateLocataire';
import {ILocataire} from '../../types';
import Space from '../public/Space';
import FormLocataire from './FormLocataire';

const UpdateLocataire: FC = () => {
  const toUpdateLocataire = useRoute().params as ILocataire;
  const {submit, form, handleChange} = useUpdateLocataire(toUpdateLocataire);

  return (
    <>
      <Space />
      <FormLocataire
        type="update"
        value={form}
        onChange={handleChange}
        submit={submit}
      />
    </>
  );
};

export default UpdateLocataire;
