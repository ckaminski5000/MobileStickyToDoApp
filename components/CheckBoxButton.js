import React, { useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function CheckBoxButton({ check, addCheckMark, index }) {
   //console.log(check)
    return (
    <View style={styles.checkButton}>
      <Pressable onPress={() => addCheckMark(index)}>
        {check ? (
          <AntDesign name="checkcircleo" size={24} color="black" />
        ) : (
          <Entypo name="circle" size={24} color="black" />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    checkButton: {
        paddingRight: 12
    },
});