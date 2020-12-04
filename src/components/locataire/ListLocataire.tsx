import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import {useGetLocataires} from '../../services/getLocataires';
import {useLocataireCtx} from '../../store/locataire';
import themes from '../../theme';
import {ILocataire} from '../../types';
import SectionTitle from '../public/SectionTitle';

const ListItem: FC<{
  item: ILocataire;
}> = ({item}) => {
  const navigation = useNavigation();

  const navigateToUpdate = () => {
    navigation.navigate('update-locataire', item);
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
          <Text>Numero: {item.idLocataire}</Text>
          <Text>Nom: {item.nom}</Text>
          <Text>Adresse: {item.adresse}</Text>
        </View>
      </View>
      <Ionicons
        name="trash-outline"
        size={themes.space * 2}
        style={tailwind('mr-5')}
        color="red"
      />
    </TouchableOpacity>
  );
};

const ListLocataire: FC = () => {
  useGetLocataires();
  const {state} = useLocataireCtx();

  const renderItem = ({item}: {item: ILocataire}) => {
    return <ListItem item={item} />;
  };

  return (
    <>
      <SectionTitle iconName="list" text="Liste de locataire" />
      <FlatList
        data={state.locataires}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.idLocataire)}
      />
    </>
  );
};

export default ListLocataire;
