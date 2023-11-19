import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DatepickerProps {
  type: string;
  sendEventHandler: (property: string, value: string) => void;
}

const Datepicker = ({ type, sendEventHandler }: DatepickerProps) => {
  const [date, setDate] = useState(new Date("2000-12-12"));
  const [showPicker, setShowPicker] = useState(false);

  const toggleShowPicker = () => {
    setShowPicker(!showPicker);
  };

  const onDateChange = ({ type }: { type: string }, selectedDate: Date) => {
    if (type === "set") {
      setDate(selectedDate);
      toggleShowPicker();
    } else {
      toggleShowPicker();
    }
  };

  if (Platform.OS === "ios") {
    return (
      <View style={styles.datepickerContainer}>
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onDateChange as any}
          style={styles.iosDatepicker}
        />
        <TouchableOpacity
          style={styles.iosDatepickerBtn}
          onPress={() => {
            sendEventHandler(type, date.toDateString());
          }}
        >
          <Text style={styles.iosDatepickerBtnTxt}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (Platform.OS === "android") {
    return (
      <View style={styles.datepickerContainer}>
        <TouchableOpacity
          onPress={() => toggleShowPicker()}
          style={styles.androidDateBtn}
        >
          <Text style={styles.androidOuterDateTxt}>
            <Text>
              {date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            sendEventHandler(
              type,
              date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
            );
          }}
        >
          <Text style={styles.androidDatepickerBtnTxt}>Done</Text>
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            maximumDate={new Date("2023-01-01")}
            onChange={onDateChange as any}
          />
        )}
      </View>
    );
  }
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  datepickerContainer: {
    borderWidth: 1,
    borderColor: "#252525",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 20,
    position: "absolute",
    bottom: 15,
    width: width - 30,
    alignSelf: "center",
    right: 15,
    left: 15,
  },
  // ios
  iosDatepicker: {
    height: 100,
    fontFamily: "AveriaSerifLibre_400Regular",
  },
  iosDatepickerBtn: {
    width: "100%",
    backgroundColor: "#252525",
    paddingVertical: 10,
    borderRadius: 30,
  },
  iosDatepickerBtnTxt: {
    fontSize: 20,
    fontFamily: "AveriaSerifLibre_400Regular",
    textAlign: "center",
    color: "#fff",
  },
  // android
  androidDatepickerBtnTxt: {
    fontSize: 20,
    fontFamily: "AveriaSerifLibre_400Regular",
    textAlign: "center",
    backgroundColor: "#252525",
    color: "#fff",
    borderRadius: 30,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  androidDateBtn: {
    paddingBottom: 32,
  },
  androidOuterDateTxt: {
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "AveriaSerifLibre_400Regular",
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "#d3d3d340",
    borderRadius: 6,
  },
});

export default Datepicker;
