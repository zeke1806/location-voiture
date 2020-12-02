import React, {FC} from 'react';
import UpdateLocation from '../components/location/UpdateLocation';
import PageContainer from '../components/public/PageContainer';

const UpdateLocationScreen: FC = () => {
  return (
    <PageContainer>
      <UpdateLocation />
    </PageContainer>
  );
};

export default UpdateLocationScreen;
