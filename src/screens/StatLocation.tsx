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
  const {
    state: {debut, fin},
    actions,
  } = useDateSegCtx();

  const voitureLocations = locationState.locations.filter((elt) => {
    const required = elt.idVoiture === voiture.idVoiture;
    if (debut && fin) {
      if (debut === fin) {
        return required;
      }
      const locationDate = new Date(elt.date).getTime();
      const debutDate = new Date(debut).getTime();
      const finDate = new Date(fin).getTime();

      return required && debutDate <= locationDate && finDate >= locationDate;
    }
    return required;
  });

  const montantTotal = voitureLocations.reduce((acc, cur) => {
    const locationMontant = cur.loyer * cur.nbJour;

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
          value={debut}
          onChange={(value) => actions.setDate('debut', value)}
        />
        <DatePicker
          placeholder="Fin"
          value={fin}
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
