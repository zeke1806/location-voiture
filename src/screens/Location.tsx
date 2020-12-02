import React, {FC} from 'react';
import PageContainer from '../components/public/PageContainer';
import PageTitle from '../components/public/PageTitle';
import Space from '../components/public/Space';
import ListVoiture from '../components/voiture/ListVoiture';
import SearchVoiture from '../components/voiture/SearchVoiture';

const LocationScreen: FC = () => {
  return (
    <PageContainer>
      <PageTitle text="Gestion des locations" />
      <SearchVoiture />
      <Space />
      <ListVoiture modeLocation={true} />
    </PageContainer>
  );
};

export default LocationScreen;
