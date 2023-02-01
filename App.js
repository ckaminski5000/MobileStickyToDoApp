import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import IconButton from "./components/IconButton";
import InputField from "./components/InputField";
import AddTaskComponent from "./components/AddTaskComponent";
import TaskList from "./components/TaskList";

export default function App() {
  const [input, setInput] = useState('');
  
  return (
    <>
      <View style={styles.container}>

      <TaskList />
      
     

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
    justifyContent: "center",
    padding: 100,
    width: "100%",    
  },
});
