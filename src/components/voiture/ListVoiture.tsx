import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import {useGetVoitures} from '../../services/getVoitures';
import {useVoitureCtx} from '../../store/voiture';
import themes from '../../theme';
import {IVoiture} from '../../types';
import SectionTitle from '../public/SectionTitle';

const ListItem: FC<{
  item: IVoiture;
  modeLocation: boolean;
}> = ({item, modeLocation}) => {
  const navigation = useNavigation();

  const navigateToUpdate = () => {
    if (!modeLocation) {
      navigation.navigate('update-voiture');
    } else {
      navigation.navigate('manage-location');
    }
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
          <Text>Numero: {item.idVoiture}</Text>
          <Text>Designation: {item.designation}</Text>
          <Text>Loyer journalier: {item.loyer}Ar</Text>
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
  useGetVoitures();
  const {state} = useVoitureCtx();

  const renderItem = ({item}: {item: IVoiture}) => {
    return <ListItem item={item} modeLocation={modeLocation} />;
  };

  return (
    <View>
      <SectionTitle iconName="list" text="Liste de voiture" />
      <FlatList
        data={state.voitures}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.idVoiture)}
      />
    </View>
  );
};

export default ListVoiture;
