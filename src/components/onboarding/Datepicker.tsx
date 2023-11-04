import { View, Text, Platform, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

const Datepicker = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showi, setShowi] = useState('');

  const toggleShowPicker = () => {
    setShowPicker(!showPicker);
  }

  const onDateChange = ({ type }: { type: string }, selectedDate: Date) => {
    if (type === 'set') {
      setDate(selectedDate)
      setShowi(selectedDate.toDateString())
      toggleShowPicker()
    } else {
      toggleShowPicker()
    }
  }

  if (Platform.OS === 'ios') {
    return (
      <View>
        <DateTimePicker
          mode='date'
          display='spinner'
          value={date}
          onChange={onDateChange as any}
        />
        <TouchableOpacity>
          <Text>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (Platform.OS === 'android') {
    return (
      <View style={{
        borderWidth: 2,
        borderColor: 'red',
        height: '100%'
      }}>
        <Text>
          {showi}
        </Text>
        <TouchableOpacity
          onPress={() => toggleShowPicker()}
        >
          <Text>
            CHANGE
          </Text>
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            mode='date'
            display='spinner'
            value={date}
            onChange={onDateChange as any}
          />
        )}
      </View>
    )
  }
}

export default Datepicker