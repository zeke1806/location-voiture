import React, {FC} from 'react';
import {useAddLocation} from '../../services/addLocation';
import {IVoiture} from '../../types';
import FormLocation from './FormLocation';

const AddLocation: FC<{
  voiture: IVoiture;
}> = ({voiture}) => {
  const {form, handleChange} = useAddLocation(voiture.idVoiture);
  return <FormLocation type="add" value={form} onChange={handleChange} />;
};

export default AddLocation;
