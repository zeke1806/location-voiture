import React, {FC} from 'react';
import {useCreateLocataire} from '../../services/createLocataire';
import FormLocataire from './FormLocataire';

const AddLocataire: FC = () => {
  const {form, handleChange, submit} = useCreateLocataire();
  return (
    <FormLocataire
      type="add"
      value={form}
      onChange={handleChange}
      submit={submit}
    />
  );
};

export default AddLocataire;
