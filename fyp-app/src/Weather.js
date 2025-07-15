import { ActivityIndicator, Alert, StyleSheet, Text, View,ScrollView } from 'react-native'
import React, {useState,useEffect} from 'react'
import  Constants  from 'expo-constants'
import WeatherInfo from './WeatherInfo'

const API_KEYS = 'b759d888a829e86f2b012cb3e8972874'

const Weather = () => {

  const [weatherData , setWeatherData] = useState(null);
  const [loaded , setLoaded] = useState(false);

  const fetchWeatherData = async (cityName) => {
    try{
      setLoaded(false);
      const response  = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`)
       if(response.status == 200){
        const data = await response.json();
        setWeatherData(data);
       }
       else{
        setWeatherData(null);
       }
       setLoaded(true);
    }catch(error){
      Alert.alert('Error', error.message);
    }
  }


  useEffect(() => {
    fetchWeatherData('Islamabad');
  }, []);

  if (!loaded){
    return(
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color="red"/>
      </View>
    )
  }


  return (
    <View style={styles.container}>
       <ScrollView style={{ backgroundColor: "transparent" }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather</Text>
        </View>
        <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
        </ScrollView>
    </View>

  )
}

export default Weather

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    paddingTop: "-100%",
  },
  header:{
    alignItems:"center",
    height:80,
    justifyContent:'center',
    backgroundColor:'#242334',
  },
  headerTitle:{
    fontSize:29,
    fontWeight:"bold",
    color:"white",
  }

})

