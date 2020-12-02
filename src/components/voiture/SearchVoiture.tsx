import React, {FC} from 'react';
import {Button, View} from 'react-native';
import tailwind from 'tailwind-rn';
import themes from '../../theme';
import MyTextInput from '../public/MyTextInput';

const SearchVoiture: FC = () => {
  return (
    <View style={tailwind('flex-row justify-between')}>
      <View style={tailwind('flex-1')}>
        <MyTextInput placeholder="Recherche numero/designation" value={''} />
      </View>
      <View style={tailwind('justify-center')}>
        <Button
          onPress={function () {}}
          title="Rechercher"
          color={themes.colors.secondary}
        />
      </View>
    </View>
  );
};

export default SearchVoiture;
