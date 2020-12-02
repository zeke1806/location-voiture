import React, {FC} from 'react';
import {Button, View} from 'react-native';
import SectionTitle from '../../components/public/SectionTitle';
import themes from '../../theme';

const FormLocation: FC<{
  type: 'add' | 'update';
}> = ({type}) => {
  return (
    <View>
      <SectionTitle
        iconName={type === 'add' ? 'add' : 'pencil'}
        text={type === 'add' ? 'Ajout de location' : 'Modifier la location'}
      />
      <View>
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
