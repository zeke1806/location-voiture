import React, {FC} from 'react';
import {IFormVoiture} from '../../types';
import Space from '../public/Space';
import FormVoiture from './FormVoiture';

const UpdateVoiture: FC<{
  value: IFormVoiture;
  onChange: (key: keyof IFormVoiture, value: string) => void;
  submit: () => void;
}> = ({value, onChange, submit}) => {
  return (
    <>
      <Space />
      <FormVoiture
        type="update"
        value={value}
        submit={submit}
        onChange={onChange}
      />
    </>
  );
};

export default UpdateVoiture;
