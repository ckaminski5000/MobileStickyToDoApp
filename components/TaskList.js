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
    console.log(isLastTaskEmpty);

    if (!isLastTaskEmpty) {
      const newTask = {
        content: "",
        radioType: "checkmark",
        date: new Date(),
        key: uuid.v4(),
      };
      console.log([...taskList, newTask]);
      setTaskList([...taskList, newTask]);
    }
  };

  const updateTask = (taskContent, key) => {
    console.log(taskContent, key);
    //const index = taskList.findIndex(task => task.key === key);
    let updatedTaskList = [...taskList];
    updatedTaskList[key] = {
      ...updatedTaskList[key],
      content: taskContent,
    };
    setTaskList(updatedTaskList);
    addTask();
  };

  const deleteTask = () => {
    if (taskList.length > 1) {
      const taskListWithoutLastTask = [...taskList];
      taskListWithoutLastTask.pop;
      const indexToDelete = taskListWithoutLastTask.findIndex(
        (task) => task === ""
      );
      if (indexToDelete > -1) {
        const updatedTaskList = taskList.splice(indexToDelete, 1);
        const newTask = {
            content: "",
            radioType: "checkmark",
            date: new Date(),
            key: uuid.v4(),
          };
        setTaskList([...updatedTaskList, newTask]);
      }
    }
  };

  /*useEffect(() => {
      addTask();
  }, [taskList]);*/

  

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
