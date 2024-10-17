import { View, Text } from 'react-native'
import React from 'react'
import WeatherHeader from './android/app/src/Components/Header'
import Weather from './android/app/src/Components/Weather'

const App = () => {
  return (
  <>
  <WeatherHeader />
  <Weather />
  </>
  )
}

export default App