import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import tailwind from 'tailwind-rn';

const PageContainer: FC = ({children}) => {
  return <SafeAreaView style={tailwind('pl-1 pr-1')}>{children}</SafeAreaView>;
};

export default PageContainer;
