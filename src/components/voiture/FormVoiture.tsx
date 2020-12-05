import React, {FC} from 'react';
import {Button, View} from 'react-native';
import MyTextInput from '../../components/public/MyTextInput';
import SectionTitle from '../../components/public/SectionTitle';
import themes from '../../theme';
import {IFormVoiture} from '../../types';

const FormVoiture: FC<{
  type: 'add' | 'update';
  value: IFormVoiture;
  onChange: (key: keyof IFormVoiture, value: string) => void;
  submit: () => void;
}> = ({type, value, onChange, submit}) => {
  return (
    <View>
      <SectionTitle
        iconName={type === 'add' ? 'add' : 'pencil'}
        text={type === 'add' ? 'Ajout de voiture' : 'Modifier la voiture'}
      />
      <View>
        <MyTextInput
          value={value.designation}
          placeholder="Designation"
          onChange={(text) => onChange('designation', text)}
        />
        <MyTextInput
          value={String(value.loyer)}
          placeholder="Loyer journalier"
          keyboardType="numeric"
          onChange={(text) => onChange('loyer', text)}
        />
        <Button
          onPress={submit}
          title={type === 'add' ? 'ajouter' : 'modifier'}
          color={themes.colors.secondary}
        />
      </View>
    </View>
  );
};

export default FormVoiture;
