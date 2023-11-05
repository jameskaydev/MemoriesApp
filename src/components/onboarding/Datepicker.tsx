import { View, Text, Platform, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatepickerProps {
  type: string;
  sendEventHandler: (property: string, value: string) => void
}

const Datepicker = ({type, sendEventHandler}: DatepickerProps) => {
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

  if (Platform.OS === 'ios') {
    return (
      <View style={styles.iosDatepickerContainer}>
        <DateTimePicker
          mode='date'
          display='spinner'
          value={date}
          onChange={onDateChange as any}
          style={styles.iosDatepicker}
        />
        <TouchableOpacity
        style={styles.datepickerBtn}
        onPress={() => {
          sendEventHandler(type, date.toDateString())
        }}
        >
          <Text
          style={styles.datepickerBtnTxt}
          >
            Done
          </Text>
          {/* <Text></Text> */}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iosDatepickerContainer: {
    borderWidth: 1,
    borderColor: "#252525",
    borderRadius: 30,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 20,
    marginBottom: 20
  },
  iosDatepicker: {
    height: 100,
    fontFamily: 'AveriaSerifLibre_400Regular'
  },
  datepickerBtn: {
    width: "100%",
    backgroundColor: '#252525',
    paddingVertical: 10,
    borderRadius: 30,
    // marginHorizontal: 15
  },
  datepickerBtnTxt: {
    fontSize: 20,
    fontFamily: 'AveriaSerifLibre_400Regular',
    textAlign: 'center',
    color: '#fff'
  }
})

export default Datepicker