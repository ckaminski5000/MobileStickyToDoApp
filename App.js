import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import IconButton from "./components/IconButton";
import InputField from "./components/InputField";
import AddTaskComponent from "./components/AddTaskComponent";
import TaskList from "./components/TaskList";

export default function App() {
  const [input, setInput] = useState("");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>Title</Text>
        </View>
        <View style={styles.row}>
          <TaskList />
        </View>

        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    width: "100%",
  },
  row: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    flex: 9,
  },
  titleContainer: {
    paddingTop: 40,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    flex: 1,
  },
});
