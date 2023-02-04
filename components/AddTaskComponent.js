import React from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import InputField from "./InputField";
import CheckBoxButton from "./CheckBoxButton";

export default function AddTaskComponent(props) {
  const {
    onChangeText,
    value,
    icon,
    size,
    color,
    index,
    addCheckMark,
    check,
    taskContent,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {taskContent === "" ? (
          <IconButton icon={icon} size={size} color={color} />
        ) : (
          <CheckBoxButton
            index={index}
            addCheckMark={addCheckMark}
            check={check}
          />
        )}
        <InputField
          value={value}
          onChangeText={onChangeText}
          placeholder="..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
});
