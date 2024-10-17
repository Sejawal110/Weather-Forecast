import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ActivityIndicator, ImageBackground } from 'react-native';
import Input from './Input';
import Button from './Button';

const API_KEY = '50c17e685e5750a866fe4d25883c50e8';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);

  
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city) return; 

      setLoading(true);
      setError(''); 

      try {
        const response = await
         fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

        if (!response.ok) {
          throw new Error('City not found!');
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (err: any) {
        setError(err.message);
        setWeatherData(null); 
      } finally {
        setLoading(false);
      }
    };

    if (shouldFetch) {
      fetchWeatherData();
      setShouldFetch(false); 
    }
  }, [shouldFetch, city]); 

  const handleSearch = () => {
    if (city.trim()) {
      setShouldFetch(true); 
    } else {
      setError('Please enter a city name!');
    }
  };

  return (
    
      <View style={styles.container}>
      <View style={styles.inputContainer}>
       <Input onChangeText={setCity} value={city} />
       <Button onPress={handleSearch} />
      </View>

      {loading && <ActivityIndicator size="large" color="#0072ff" style={styles.loadingIndicator} />}

      {error && <Text style={styles.errorText}>{error}</Text>}

      {weatherData && (

        
        <View style={styles.weatherInfo}>

          
          <Text style={styles.cityName}>{weatherData.name}</Text>
          <Text style={styles.temperature}>{weatherData.main.temp}°</Text>
          <Text style={styles.description}>{weatherData.weather[0].description}</Text> 


          <View style={styles.card}>

          <View style={styles.infoBlock}>
        <Text style={styles.text}>Feels like: {weatherData.main.feels_like}°</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.text}>Humidity: {weatherData.main.humidity}%</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.text}>Wind Speed: {weatherData.wind.speed} km/h</Text>
      </View>
      
    </View>
        </View>
      )}
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 25,
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
 
  
  loadingIndicator: {
    marginTop: 20,
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginTop: '20%'
  },
  weatherInfo: {
    alignItems: 'center',
    marginTop: '11%',
  },
  cityName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 9
  },
  temperature: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0072ff',
  },
  feelsLike: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  otherDetails: {
    fontSize: 16,
    color: '#777',
  },

  description: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
    marginTop: '15%'
  },
  infoBlock: {
    width: '100%', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },


  bgImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  
});

export default Weather;