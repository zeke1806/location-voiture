import React, {FC} from 'react';
import UpdateVoiture from '../components/voiture/UpdateVoiture';
import PageContainer from '../components/public/PageContainer';
import {useRoute} from '@react-navigation/native';
import {IVoiture} from '../types';
import {useUpdateVoiture} from '../services/updateVoiture';

const UpdateVoitureScreen: FC = () => {
  const voiture = useRoute().params as IVoiture;
  const {form, handleChange, submit} = useUpdateVoiture(voiture);
  return (
    <PageContainer>
      <UpdateVoiture value={form} submit={submit} onChange={handleChange} />
    </PageContainer>
  );
};

export default UpdateVoitureScreen;
