import React, {FC} from 'react';
import {Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import PageContainer from '../components/public/PageContainer';
import themes from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddLocation from '../components/location/AddLocation';

const ManageLocationScreen: FC = () => {
  return (
    <PageContainer>
      <View style={tailwind('flex-row justify-between pt-1 px-1')}>
        <Text>Nissan numero xxx</Text>
        <Ionicons
          name="stats-chart"
          size={themes.space * 2}
          color={themes.colors.secondary}
        />
      </View>

      <AddLocation />
    </PageContainer>
  );
};

export default ManageLocationScreen;
