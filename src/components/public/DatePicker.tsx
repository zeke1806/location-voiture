import React, {FC, useState} from 'react';
import {Text} from 'react-native';
import tailwind from 'tailwind-rn';
import themes from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker: FC<{
  placeholder: string;
}> = ({placeholder}) => {
  const [showDate, setShowDate] = useState(false);

  return (
    <>
      <Text style={tailwind('text-center')}>
        <Ionicons
          name="calendar"
          size={themes.space * 3}
          onPress={() => setShowDate(true)}
        />
        {'    '}
        {placeholder}
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
    </>
  );
};

export default DatePicker;
