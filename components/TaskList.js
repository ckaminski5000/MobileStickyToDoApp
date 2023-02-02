import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import uuid from "react-native-uuid";

import AddTaskComponent from "./AddTaskComponent";

export default function TaskList() {
  const [taskList, setTaskList] = useState([
    {
      content: "",
      radioType: "checkmark",
      date: new Date(),
      key: uuid.v4(),
    },
  ]);
  const [test, setTest] = useState("");

  const addTask = () => {
    //only add Task if last item is not empty

    //check last item:
    const lastItemTaskList = taskList.length - 1;
    const isLastTaskEmpty = taskList[lastItemTaskList].content === "";

    if (!isLastTaskEmpty) {
      const newTask = {
        content: "",
        radioType: "checkmark",
        date: new Date(),
        key: uuid.v4(),
      };
      setTaskList([...taskList, newTask]);
    }
  };

  const updateTask = (taskContent, key) => {
    let updatedTaskList = [...taskList];
    updatedTaskList[key] = {
      ...updatedTaskList[key],
      content: taskContent,
    };
    setTaskList(updatedTaskList);

    //deleteTask();
  };

  const deleteTask = () => {
    if (taskList.length > 1) {
      const indexToDelete = taskList.findIndex(
        (task, index) => task.content === "" && index !== taskList.length - 1
      );
      console.log(indexToDelete);
      if (indexToDelete > -1) {
        let updatedTaskList = [...taskList];
        updatedTaskList.splice(indexToDelete, 1);
        setTaskList([...updatedTaskList]);
      }
    }
  };

  useEffect(() => {
    addTask();
    deleteTask();
  }, [taskList]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.taskContainer}>
        <FlatList
          data={taskList}
          keyboardShouldPersistTaps="always"
          renderItem={({ task, index }) => (
            <AddTaskComponent
              onChangeText={(taskContent) => updateTask(taskContent, index)}
              value={task?.content}
              icon="plus"
              size={24}
              color="#00000"
            />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    position: "absolute",
  },
});
