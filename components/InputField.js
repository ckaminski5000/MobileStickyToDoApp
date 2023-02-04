import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function InputField(props) {

  const {value, onChangeText, clearTextOnFocus = true, placeholder = ''} = props;
  return (
   
   <View style={styles.inputContainer}>

   <TextInput 
   style={styles.inputField} 
   value={value}
   onChangeText={onChangeText}
   clearTextOnFocus={false}
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