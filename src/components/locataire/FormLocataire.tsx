import React, {FC} from 'react';
import {Button, View} from 'react-native';
import MyTextInput from '../../components/public/MyTextInput';
import SectionTitle from '../../components/public/SectionTitle';
import themes from '../../theme';
import {IFormLocataire} from '../../types';

const FormLocataire: FC<{
  type: 'add' | 'update';
  value: IFormLocataire;
  onChange: (key: keyof IFormLocataire, value: string) => void;
  submit: () => void;
}> = ({type, value, onChange, submit}) => {
  return (
    <View>
      <SectionTitle
        iconName={type === 'add' ? 'add' : 'pencil'}
        text={type === 'add' ? 'Ajout de locataire' : 'Modifier le locataire'}
      />
      <View>
        <MyTextInput
          value={value.nom}
          placeholder="Nom"
          onChange={(text) => onChange('nom', text)}
        />
        <MyTextInput
          value={value.adresse}
          placeholder="Adresse"
          onChange={(text) => onChange('adresse', text)}
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

export default FormLocataire;
