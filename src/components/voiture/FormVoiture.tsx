import React, {FC} from 'react';
import {Button, View} from 'react-native';
import MyTextInput from '../../components/public/MyTextInput';
import SectionTitle from '../../components/public/SectionTitle';
import themes from '../../theme';

const FormVoiture: FC<{
  type: 'add' | 'update';
}> = ({type}) => {
  return (
    <View>
      <SectionTitle
        iconName={type === 'add' ? 'add' : 'pencil'}
        text={type === 'add' ? 'Ajout de voiture' : 'Modifier la voiture'}
      />
      <View>
        <MyTextInput value="" placeholder="Designation" />
        <MyTextInput
          value=""
          placeholder="Loyer journalier"
          keyboardType="numeric"
        />
        <Button
          onPress={function () {}}
          title={type === 'add' ? 'ajouter' : 'modifier'}
          color={themes.colors.secondary}
        />
      </View>
    </View>
  );
};

export default FormVoiture;
