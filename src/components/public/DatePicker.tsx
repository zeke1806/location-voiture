import React, {FC, useState} from 'react';
import {Text} from 'react-native';
import tailwind from 'tailwind-rn';
import themes from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

const DatePicker: FC<{
  placeholder: string;
  value: string;
  onChange: (date: string) => void;
}> = ({placeholder, onChange, value}) => {
  const [showDate, setShowDate] = useState(false);

  const format = (date: string) => dayjs(date).format('DD/MM/YYYY');

  return (
    <>
      <Text style={tailwind('text-center')}>
        <Ionicons
          name="calendar"
          size={themes.space * 3}
          onPress={() => setShowDate(true)}
        />
        {'    '}
        {value ? format(value) : placeholder}
      </Text>
      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(value)}
          is24Hour={true}
          display="default"
          onChange={function (e, selectedDate) {
            onChange(selectedDate ? selectedDate.toISOString() : value);
            setShowDate(false);
          }}
        />
      )}
    </>
  );
};

export default DatePicker;
