import { Pressable, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function IconButton({ icon, color }) {
  return (
    <Pressable style={styles.iconButton} >
      <AntDesign name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
