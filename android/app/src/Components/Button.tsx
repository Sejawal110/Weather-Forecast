import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Button(props: any) {
  return  <TouchableOpacity style={styles.searchButton} onPress={props.onPress}>
  <Image
    source={require('./imgs/search.png')} 
    style={styles.searchIcon}
  />
</TouchableOpacity>
    
}

const styles = StyleSheet.create({
    searchButton: {
        padding: 5,
      },


      searchIcon: {
        width: 20,
        height: 20,
        tintColor: '#0072ff',
      },
})