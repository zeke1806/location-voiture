import React, {FC, useState} from 'react';
import {Button, View} from 'react-native';
import SectionTitle from '../../components/public/SectionTitle';
import themes from '../../theme';
import {Picker} from '@react-native-picker/picker';
import MyTextInput from '../public/MyTextInput';
import tailwind from 'tailwind-rn';
import DatePicker from '../public/DatePicker';

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
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '50%'}}
            onValueChange={function (itemValue) {
              setState(itemValue as string);
            }}>
            <Picker.Item label="Rakoto" value="Rakoto" />
            <Picker.Item label="Rabe" value="Rabe" />
          </Picker>
          <View style={tailwind('flex-row items-center')}>
            <View style={tailwind('flex-1')}>
              <MyTextInput
                value=""
                placeholder="Nombre de jour"
                keyboardType="numeric"
              />
            </View>
            <View style={tailwind('flex-1')}>
              <DatePicker placeholder="Date de location" />
            </View>
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
