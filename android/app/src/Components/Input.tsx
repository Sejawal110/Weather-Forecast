import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = (props: any) => {
  return  <TextInput
  style={styles.input}
  placeholder="Enter a city name"
  placeholderTextColor="#888"
  onChangeText={props.onChangeText}
  value={props.value}
/>
}

export default Input;

const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },
})