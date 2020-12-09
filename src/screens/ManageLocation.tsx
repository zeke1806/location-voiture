import React, {FC, useCallback} from 'react';
import {Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import PageContainer from '../components/public/PageContainer';
import themes from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddLocation from '../components/location/AddLocation';
import Space from '../components/public/Space';
import ListLocation from '../components/location/ListLocation';
import {useNavigation, useRoute} from '@react-navigation/native';
import {IVoiture} from '../types';

const ManageLocationScreen: FC = () => {
  const voiture = useRoute().params as IVoiture;
  const {navigate} = useNavigation();

  const navigateToStat = useCallback(() => {
    navigate('stat-location', voiture);
  }, [navigate, voiture]);

  return (
    <PageContainer>
      <View style={tailwind('flex-row justify-between pt-1 px-1')}>
        <Text>
          {voiture.designation.toUpperCase()} numero {voiture.idVoiture} a{' '}
          {voiture.loyer}Ar par jour
        </Text>
        <Ionicons
          name="stats-chart"
          size={themes.space * 2}
          color={themes.colors.secondary}
          onPress={navigateToStat}
        />
      </View>

      <AddLocation voiture={voiture} />
      <Space />
      <ListLocation voiture={voiture} />
    </PageContainer>
  );
};

export default ManageLocationScreen;
