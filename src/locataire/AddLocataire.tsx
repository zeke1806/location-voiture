import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import MyTextInput from '../components/public/MyTextInput';
import themes from '../theme';

const AddLocataire: FC = () => {
  return (
    <View>
      <View style={tailwind('flex-row items-center')}>
        <Ionicons name="add" size={themes.space * 2} />
        <Text>Ajout de locataire</Text>
      </View>
      <View>
        <MyTextInput value="" placeholder="Nom" />
        <MyTextInput value="" placeholder="Adresse" />
        <Button
          onPress={function () {}}
          title="Enregistrer"
          color={themes.colors.secondary}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

export default AddLocataire;
