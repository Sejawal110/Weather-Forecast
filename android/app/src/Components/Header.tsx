
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherHeader = () => {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.headerContainer}>
        
        <View  style={styles.imgContainer}>
          <Text style={styles.headerText}>Weather Forecast</Text>
          <Image style={styles.imgStyles} source={require('./imgs/cloudy.png')}  />
        </View>
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#3498db', 
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerContainer: {
    flexDirection: 'row',
        alignItems: 'center',
  },

  imgContainer: {
    flexDirection: 'row',
        alignItems: 'center',
  },

  headerText: {
    fontSize: 24,
     fontWeight: 'bold',
     marginRight: 10,
      color: '#fff', 
  },

  imgStyles: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
})

export default WeatherHeader;