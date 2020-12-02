import React, {FC} from 'react';
import PageContainer from '../components/public/PageContainer';
import PageTitle from '../components/public/PageTitle';
import AddVoiture from '../components/voiture/AddVoiture';

const VoitureScreen: FC = () => {
  return (
    <PageContainer>
      <PageTitle text="Gestion des voitures" />
      <AddVoiture />
    </PageContainer>
  );
};

export default VoitureScreen;
