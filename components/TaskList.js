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
      checked: false,
    },
  ]);

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
        checked: false,
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
      if (indexToDelete > -1) {
        let updatedTaskList = [...taskList];
        updatedTaskList.splice(indexToDelete, 1);
        setTaskList([...updatedTaskList]);
      }
    }
  };

  const addCheckMark = (index) => {
    const updatedTaskList = [...taskList];
    const isTaskChecked = updatedTaskList[index].checked;
    updatedTaskList[index] = {
      ...updatedTaskList[index],
      checked: !isTaskChecked,
    };
    setTaskList(updatedTaskList);
  };

  useEffect(() => {
    addTask();
    deleteTask();
  }, [taskList]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.taskContainer}>
        {taskList.map((task, index) => {
          return (
            <AddTaskComponent
              onChangeText={(taskContent) => updateTask(taskContent, index)}
              value={task?.content}
              icon="plus"
              size={24}
              color="#00000"
              addCheckMark={addCheckMark}
              index={index}
              check={task?.checked}
              key={task?.key}
              taskContent={task?.content}
            />
          );
        })}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    position: "absolute",
    width: "100%"
  },
});

