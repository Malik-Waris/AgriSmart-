import { StyleSheet, Text, View,Image,Pressable,Alert,TextInput, TouchableOpacity,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Slider from './Slider';
const Home = () => {
  const navigation = useNavigation();

  touch = () => {
    Alert.alert("Developer","Coming soon....")
  }
  return (
    
    <View style={{ width: "100%", height: "100%" }}>
      <SafeAreaView>
        <ScrollView style={{ backgroundColor: "transparent" }}>
        <View style={styles.container}>
          <Text style={styles.headerText}>DASHBOARD</Text>
          <Text style={styles.title}>CROP | Data</Text>
        </View>
        <View style={styles.extraInfo}>
        <TouchableOpacity onPress={() => navigation.navigate('WeatherAPI')}>
        <View style={{backgroundColor:'white',padding:10,marginTop:20,marginRight:120,width: "80%",
                      marginLeft:16,alignItems:"center",borderWidth:3,borderColor:"white", borderRadius:20}}>
            <Text style={{color:"red",fontWeight: 'bold'}}>Weather</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AQI')}>
        <View style={{backgroundColor:'white',padding:10,marginTop:20,marginRight:50,width: "80%",
                      marginLeft:16,alignItems:"center",borderWidth:3,borderColor:"white", borderRadius:20}}>
            <Text style={{color:"red",fontWeight: 'bold'}}>Air Quality Index</Text>
        </View>
      </TouchableOpacity>
      </View>
        <View style={{flexDirection:"row", height:220,width:"100%",paddingTop:"3%",paddingBottom:"2%"}}>
        
          <View style={{width:"45%",backgroundColor:"white",marginLeft:"3%",alignItems:"center",paddingTop:"4%",borderRadius:20}}>
          
            <Image
              source={require("../assets/npk.jpeg")}
              style={styles.AImage}></Image>
              <TouchableOpacity onPress={() => touch()}>
              <Text style={{paddingTop:"15%",fontSize:22,}}>
                PH Level
              </Text>
              </TouchableOpacity>
            </View>
          
          <View style={{width:"45%",backgroundColor:"white",marginLeft:"4%",alignItems:"center",paddingTop:"4%",borderRadius:20}}>
            <Image
              source={require("../assets/water.jpeg")}
              style={styles.AImage}></Image>
              <TouchableOpacity onPress={() => touch()}>
              <Text style={{paddingTop:"15%",fontSize:22,}}>
                Water Level
              </Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection:"row", height:220,width:"100%",paddingTop:"3%",paddingBottom:"2%"}}>
          <View style={{width:"45%",backgroundColor:"white",marginLeft:"3%",alignItems:"center",paddingTop:"4%",borderRadius:20}}>
            <Image
              source={require("../assets/rain.jpeg")}
              style={styles.AImage}></Image>
              <TouchableOpacity onPress={() => touch()}>
              <Text style={{paddingTop:"15%",fontSize:22,}}>
                Rain Sensor
              </Text>
              </TouchableOpacity>
          </View>
          <View style={{width:"45%",backgroundColor:"white",marginLeft:"4%",alignItems:"center",paddingTop:"2%",borderRadius:20}}>
            <Image
              source={require("../assets/temperature.png")}
              style={{height:"66%",width:"70%",borderRadius:20,}}></Image>
              <TouchableOpacity onPress={() => touch()}>
              <Text style={{paddingTop:"1%",fontSize:22,}}>
                Temperature
              </Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:"row", height:220,width:"100%",paddingTop:"3%",paddingBottom:"2%"}}>
          <View style={{width:"45%",backgroundColor:"white",marginLeft:"3%",alignItems:"center",paddingTop:"4%",borderRadius:20}}>
            <Image
              source={require("../assets/waterMotor.jpeg")}
              style={{height:"70%",width:"70%",borderRadius:20,}}></Image>
              <TouchableOpacity onPress={() => touch()}>
              <Text style={{paddingTop:"2%",fontSize:22,}}>
                Water Motor
              </Text>
              </TouchableOpacity>
          </View>
          <View style={{width:"45%",backgroundColor:"white",marginLeft:"4%",alignItems:"center",paddingTop:"4%",borderRadius:20}}>
            <Image
              source={require("../assets/humidity.png")}
              style={{height:"66%",width:"70%",borderRadius:20,}}></Image>
              <TouchableOpacity onPress={() => touch()}>
              <Text style={{paddingTop:"6%",fontSize:22,}}>
                Humidity
              </Text>
              </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}


export default Home

const styles = StyleSheet.create({
  container:{
    padding:"5%"
  },
  header:{
    width:"100%",
    flexDirection:"row",
    marginTop:"5%",
  },
  headerText:{
    fontSize: 18,
    fontWeight: "bold",
  },
  title:{
    marginTop:"5%",
    fontSize:20,
    fontWeight:"600"
  },
  AContainer:{
    flexDirection:"row",
    height:"65%",
    width:"100%",
    alignItems:"center",
    backgroundColor:"black",
    justifyContent:"space-between",
  },
  A1Container:{
    flexDirection:"column",
    height:"25%",
    width:"100%",
    
    alignItems:"center",
    justifyContent:"space-between",
  },
  AImage:{
    height:"50%",
    width:"70%",
    borderRadius:20,
  },
  extraInfo:{
    flexDirection:"row",
    justifyContent:"space-around",
    padding:7,
},
  

})