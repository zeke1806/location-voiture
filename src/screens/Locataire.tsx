import React, {FC} from 'react';
import PageContainer from '../components/public/PageContainer';
import PageTitle from '../components/public/PageTitle';
import AddLocataire from '../components/locataire/AddLocataire';
import ListLocataire from '../components/locataire/ListLocataire';
import Space from '../components/public/Space';

const LocataireScreen: FC = () => {
  return (
    <PageContainer>
      <PageTitle text="Gestion des locataires" />
      <AddLocataire />

      <Space />

      <ListLocataire />
    </PageContainer>
  );
};

export default LocataireScreen;
