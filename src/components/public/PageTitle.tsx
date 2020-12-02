import React, {FC} from 'react';
import {Text} from 'react-native';
import tailwind from 'tailwind-rn';

const PageTitle: FC<{
  text: string;
}> = ({text}) => {
  return <Text style={tailwind('text-3xl text-gray-700')}>{text}</Text>;
};

export default PageTitle;
