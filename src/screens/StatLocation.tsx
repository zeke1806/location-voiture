import {useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import Chart from '../components/location/Chart';
import DatePicker from '../components/public/DatePicker';
import PageContainer from '../components/public/PageContainer';
import SectionTitle from '../components/public/SectionTitle';
import {useDateSegCtx} from '../store/dateSeg';
import {useLocationCtx} from '../store/location';
import {IVoiture} from '../types';

const StatLocationScreen: FC = () => {
  const voiture = useRoute().params as IVoiture;
  const {state: locationState} = useLocationCtx();
  const {state, actions} = useDateSegCtx();

  const voitureLocations = locationState.locations.filter(
    (elt) => elt.idVoiture === voiture.idVoiture,
  );

  const montantTotal = voitureLocations.reduce((acc, cur) => {
    const locationMontant = cur.loyer * cur.nbJour;
    console.log({
      cur,
    });
    return acc + locationMontant;
  }, 0);

  return (
    <PageContainer>
      <View style={tailwind('flex-row justify-center pt-1')}>
        <Text>
          {voiture.designation.toUpperCase()} numero {voiture.idVoiture} a{' '}
          {voiture.loyer}Ar par jour
        </Text>
      </View>

      <View style={tailwind('flex-row justify-around mt-2')}>
        <DatePicker
          placeholder="Debut"
          value={state.debut}
          onChange={(value) => actions.setDate('debut', value)}
        />
        <DatePicker
          placeholder="Fin"
          value={state.fin}
          onChange={(value) => actions.setDate('fin', value)}
        />
      </View>

      <View style={tailwind('justify-center items-center pt-2')}>
        <SectionTitle
          iconName="people-sharp"
          text={`Totale de location: ${voitureLocations.length}`}
        />
        <SectionTitle
          iconName="cash"
          text={`Montant totale: ${montantTotal}`}
        />
      </View>

      <Chart />
    </PageContainer>
  );
};

export default StatLocationScreen;
