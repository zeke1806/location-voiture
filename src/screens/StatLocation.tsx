import React, {FC} from 'react';
import {Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import Chart from '../components/location/Chart';
import DatePicker from '../components/public/DatePicker';
import PageContainer from '../components/public/PageContainer';
import SectionTitle from '../components/public/SectionTitle';

const StatLocationScreen: FC = () => {
  return (
    <PageContainer>
      <View style={tailwind('flex-row justify-center pt-1')}>
        <Text>Nissan numero xxx a xxxxAr par jour</Text>
      </View>

      <View style={tailwind('flex-row justify-around mt-2')}>
        <DatePicker placeholder="Debut" />
        <DatePicker placeholder="Fin" />
      </View>

      <View style={tailwind('justify-center items-center pt-2')}>
        <SectionTitle iconName="people-sharp" text="Totale de location: 0" />
        <SectionTitle iconName="cash" text="Montant totale: 0" />
      </View>

      <Chart />
    </PageContainer>
  );
};

export default StatLocationScreen;
