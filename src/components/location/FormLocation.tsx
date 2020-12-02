import React, {FC, useState} from 'react';
import {Button, Text, View} from 'react-native';
import SectionTitle from '../../components/public/SectionTitle';
import themes from '../../theme';
import {Picker} from '@react-native-picker/picker';
import MyTextInput from '../public/MyTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import DateTimePicker from '@react-native-community/datetimepicker';

const FormLocation: FC<{
  type: 'add' | 'update';
}> = ({type}) => {
  const [state, setState] = useState('Rakoto');
  const [showDate, setShowDate] = useState(false);

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
            <Text style={tailwind('flex-1 text-center')}>
              <Ionicons
                name="calendar"
                size={themes.space * 3}
                onPress={() => setShowDate(true)}
              />
              {'    '}
              {'Date de location'}
            </Text>
            {showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={new Date()}
                is24Hour={true}
                display="default"
                onChange={function () {
                  setShowDate(false);
                }}
              />
            )}
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
