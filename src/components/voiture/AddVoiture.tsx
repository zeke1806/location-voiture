import React, {FC} from 'react';
import {useCreateVoiture} from '../../services/createVoiture';
import FormVoiture from './FormVoiture';

const AddVoiture: FC = () => {
  const {form, handleChange, submit} = useCreateVoiture();
  return (
    <FormVoiture
      type="add"
      value={form}
      onChange={handleChange}
      submit={submit}
    />
  );
};

export default AddVoiture;
