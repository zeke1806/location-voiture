import React, {FC} from 'react';
import {Button, View} from 'react-native';
import MyTextInput from '../../components/public/MyTextInput';
import SectionTitle from '../../components/public/SectionTitle';
import themes from '../../theme';

const AddLocataire: FC = () => {
  return (
    <View>
      <SectionTitle iconName="add" text="Ajout de locataire" />
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
