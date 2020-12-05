import React, {FC} from 'react';
import UpdateVoiture from '../components/voiture/UpdateVoiture';
import PageContainer from '../components/public/PageContainer';

const UpdateVoitureScreen: FC = () => {
  return (
    <PageContainer>
      <UpdateVoiture
        value={{designation: '', loyer: 0}}
        submit={() => {}}
        onChange={() => {}}
      />
    </PageContainer>
  );
};

export default UpdateVoitureScreen;
