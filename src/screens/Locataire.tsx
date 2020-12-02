import React, {FC} from 'react';
import PageContainer from '../components/public/PageContainer';
import PageTitle from '../components/public/PageTitle';
import AddLocataire from '../locataire/AddLocataire';

const LocataireScreen: FC = () => {
  return (
    <PageContainer>
      <PageTitle text="Gestion des locataires" />
      <AddLocataire />
    </PageContainer>
  );
};

export default LocataireScreen;
