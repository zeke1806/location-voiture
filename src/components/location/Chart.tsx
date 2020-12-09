import React, {FC} from 'react';
import {Dimensions, View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import tailwind from 'tailwind-rn';
//@ts-ignore
import randomcolor from 'randomcolor';
import {useVoitureCtx} from '../../store/voiture';
import {useLocationCtx} from '../../store/location';
import {ILocation} from '../../types';

interface IData {
  name: string;
  population: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
}

const Chart: FC = () => {
  const {
    state: {voitures},
  } = useVoitureCtx();
  const {
    state: {locations},
  } = useLocationCtx();

  const generateData = (): IData[] => {
    return locations
      .reduce((acc, cur) => {
        if (!acc.find((elt) => elt.idVoiture === cur.idVoiture)) {
          acc.push(cur);
        }
        return acc;
      }, [] as ILocation[])
      .map((l) => ({
        name: voitures.find((elt) => elt.idVoiture === l.idVoiture)!
          .designation,
        population: locations.filter((elt) => elt.idVoiture === l.idVoiture)
          .length,
        color: randomcolor(),
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      }));
  };

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <View style={tailwind('items-center')}>
      <PieChart
        data={generateData()}
        width={Dimensions.get('screen').width}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default Chart;
