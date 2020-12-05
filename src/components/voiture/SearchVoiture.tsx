import React, {FC} from 'react';
import {View} from 'react-native';
import tailwind from 'tailwind-rn';
import themes from '../../theme';
import MyTextInput from '../public/MyTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useVoitureCtx} from '../../store/voiture';

const SearchVoiture: FC = () => {
  const {state, actions} = useVoitureCtx();

  return (
    <View style={tailwind('flex-row justify-between')}>
      <View style={tailwind('flex-1')}>
        <MyTextInput
          placeholder="Recherche numero/designation"
          value={state.search}
          onChange={actions.handleChangeSearch}
        />
      </View>
      <View style={tailwind('justify-center')}>
        <Ionicons
          name="search"
          size={themes.space * 2}
          color={themes.colors.secondary}
        />
      </View>
    </View>
  );
};

export default SearchVoiture;
