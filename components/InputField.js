import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function InputField({value, onChangeText, clearTextOnFocus = true, placeholder = ''}) {
  return (
   
   <View style={styles.inputContainer}>

   <TextInput 
   style={styles.inputField} 
   value={value}
   onChangeText={onChangeText}
   clearTextOnFocus={true}
   selectionColor='blue'
   multiline={true}
   placeholder={placeholder} />
   </View>
  )
}


const styles = StyleSheet.create({
    inputField: {        
        color: 'black',
        padding: 7,
    },
    inputContainer: {
        borderBottomColor: 'purple',
        borderBottomWidth: '1',
        maxWidth: '80%'
    }
})