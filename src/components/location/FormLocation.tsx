import React, {FC, useState} from 'react';
import {Button, View} from 'react-native';
import SectionTitle from '../../components/public/SectionTitle';
import themes from '../../theme';
import {Picker} from '@react-native-picker/picker';
import MyTextInput from '../public/MyTextInput';
import tailwind from 'tailwind-rn';

const FormLocation: FC<{
  type: 'add' | 'update';
}> = ({type}) => {
  const [state, setState] = useState('Rakoto');

  return (
    <View>
      <SectionTitle
        iconName={type === 'add' ? 'add' : 'pencil'}
        text={type === 'add' ? 'Ajout de location' : 'Modifier la location'}
      />
      <View>
        <View>
          <Picker
            selectedValue={state}
            onValueChange={function (itemValue) {
              setState(itemValue as string);
            }}>
            <Picker.Item label="Rakoto" value="Rakoto" />
            <Picker.Item label="Rabe" value="Rabe" />
          </Picker>
          <View>
            <MyTextInput value="" placeholder="Nombre de jour" />
          </View>
        </View>

        <Button
          onPress={function () {}}
          title={type === 'add' ? 'ajouter' : 'modifier'}
          color={themes.colors.secondary}
        />
      </View>
    </View>
  );
};

export default FormLocation;
