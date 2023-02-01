import React from 'react'
import { View, StyleSheet } from 'react-native'
import IconButton from './IconButton'
import InputField from './InputField'

export default function AddTaskComponent(props) {
  
    const {onChangeText, value, icon, size, color} = props;

    return (
    <View style={styles.container}>
        <View style={styles.row}>
            <IconButton
            icon={icon}
            size={size}
            color={color}
            />
            <InputField
            value={value}
            onChangeText={onChangeText}
            placeholder="..."
            />

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    },
    row: {
        alignItems: "center",
        flexDirection: "row",
        padding: 10
    }
})