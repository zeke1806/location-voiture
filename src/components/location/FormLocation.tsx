import React, {FC} from 'react';
import {Button, View} from 'react-native';
import SectionTitle from '../../components/public/SectionTitle';
import themes from '../../theme';
import {Picker} from '@react-native-picker/picker';
import MyTextInput from '../public/MyTextInput';
import tailwind from 'tailwind-rn';
import DatePicker from '../public/DatePicker';
import {useGetLocataires} from '../../services/getLocataires';
import {useLocataireCtx} from '../../store/locataire';
import {IFormLocation} from '../../types';

const FormLocation: FC<{
  type: 'add' | 'update';
  value: IFormLocation;
  onChange: (key: keyof IFormLocation, value: string) => void;
}> = ({type, onChange, value}) => {
  useGetLocataires();
  const {
    state: {locataires},
  } = useLocataireCtx();

  return (
    <View>
      <SectionTitle
        iconName={type === 'add' ? 'add' : 'pencil'}
        text={type === 'add' ? 'Ajout de location' : 'Modifier la location'}
      />
      <View>
        <View>
          <Picker
            selectedValue={value.locataire_id}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '50%'}}
            onValueChange={function (itemValue) {
              onChange('locataire_id', String(itemValue));
            }}>
            {locataires.map((loc) => (
              <Picker.Item
                label={loc.nom}
                value={loc.idLocataire}
                key={loc.idLocataire}
              />
            ))}
          </Picker>
          <View style={tailwind('flex-row items-center')}>
            <View style={tailwind('flex-1')}>
              <MyTextInput
                value={String(value.nbJour)}
                placeholder="Nombre de jour"
                keyboardType="numeric"
                onChange={function (text) {
                  onChange('nbJour', text);
                }}
              />
            </View>
            <View style={tailwind('flex-1')}>
              <DatePicker
                placeholder="Date de location"
                value={value.date}
                onChange={(date) => onChange('date', date)}
              />
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
