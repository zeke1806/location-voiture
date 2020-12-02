import React, {FC} from 'react';
import PageContainer from '../components/public/PageContainer';
import PageTitle from '../components/public/PageTitle';
import Space from '../components/public/Space';
import AddVoiture from '../components/voiture/AddVoiture';
import ListVoiture from '../components/voiture/ListVoiture';
import SearchVoiture from '../components/voiture/SearchVoiture';

const VoitureScreen: FC = () => {
  return (
    <PageContainer>
      <PageTitle text="Gestion des voitures" />
      <AddVoiture />
      <Space />
      <SearchVoiture />
      <Space />
      <ListVoiture modeLocation={false} />
    </PageContainer>
  );
};

export default VoitureScreen;
