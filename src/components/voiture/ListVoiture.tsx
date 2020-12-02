import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import themes from '../../theme';
import SectionTitle from '../public/SectionTitle';

const DATA = [
  {
    numVoiture: '123',
    designation: 'Dodge',
    lj: '2M',
  },
  {
    numVoiture: '456',
    designation: 'Ferrari',
    lj: '2M',
  },
  {
    numVoiture: '789',
    designation: 'Nissan',
    lj: '2M',
  },
];

const ListItem: FC<{
  item: typeof DATA[0];
  modeLocation: boolean;
}> = ({item, modeLocation}) => {
  const navigation = useNavigation();

  const navigateToUpdate = () => {
    navigation.navigate('update-voiture');
  };

  return (
    <TouchableOpacity
      style={tailwind('flex-row p-1 justify-between')}
      onPress={navigateToUpdate}>
      <View style={tailwind('flex-row')}>
        <Ionicons
          name="document-outline"
          size={themes.space * 2}
          style={tailwind('mr-5')}
        />
        <View>
          <Text>Numero: {item.numVoiture}</Text>
          <Text>Designation: {item.designation}</Text>
          <Text>Loyer journalier: {item.lj}</Text>
        </View>
      </View>
      {!modeLocation ? (
        <Ionicons
          name="trash-outline"
          size={themes.space * 2}
          style={tailwind('mr-5')}
          color="red"
        />
      ) : (
        <View>
          <View
            style={[
              tailwind('p-2 rounded-full border-opacity-0'),
              {backgroundColor: themes.colors.secondary},
            ]}>
            <Text style={tailwind('text-white font-bold')}>Nb location: 0</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const ListVoiture: FC<{
  modeLocation: boolean;
}> = ({modeLocation}) => {
  const renderItem = ({item}: {item: typeof DATA[0]}) => {
    return <ListItem item={item} modeLocation={modeLocation} />;
  };

  return (
    <View>
      <SectionTitle iconName="list" text="Liste de voiture" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.numVoiture}
      />
    </View>
  );
};

export default ListVoiture;
