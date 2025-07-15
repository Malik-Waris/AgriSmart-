import { StyleSheet, ScrollView, ImageBackground,Text, View,Image,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Linking } from 'react-native';

const Help = () => {
  return (
    <View style={{width:"100%",height:"100%"}}>
      <ScrollView style={{backgroundColor: 'transparent'}}>
      <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/helpIcon.jpeg")}
      />
    </View>
    <View style={{paddingLeft:"44%",flexDirection:"row"}}>
      <Text style={{color:"red",paddingTop:"7%",alignContent:"center",fontSize:27,fontWeight:'bold'}}>Help</Text>
    </View>
    <View style={{marginLeft:"6%",marginTop:"4%"}}>
    <Text style={{fontSize:15}}>1. IoT-based smart farming is a network typically designed with sensors 
    (light, humidity, temperature, soil moisture, etc.) 
    to monitor the crop field and automate farming activities. 
    The farmers are able to track the conditions in the field from anywhere.</Text>
    </View>
    <View style={{marginLeft:"6%",marginTop:"3%"}}>
    <Text style={{fontSize:15}}>2. Know about your Rasberry Pi and working of it.Raspberry Pi is defined as a minicomputer the size of a credit card that is interoperable with any input and 
    output hardware device like a monitor, a television, a mouse, or a keyboard
     – effectively converting the set-up into a full-fledged PC at a low cost.</Text>
    </View>
    <View style={{marginLeft:"6%",marginTop:"3%"}}>
    <Text style={{fontSize:15}}>3. Additional Resources in future.</Text>
    </View>
    <View style={{marginLeft:"6%"}}>
    <Text style={{marginTop:"5%",fontSize:20,fontWeight:'bold'}}>. For More Information:</Text>
    </View>
    <View style={{marginLeft:"6%",marginTop:"3%"}}>
    <Text style={{color: 'blue',textDecorationLine: 'underline'}}
      onPress={() => Linking.openURL('https://www.raspberrypi.org/')}>
     . Rasberry pi
    </Text>
    <Text style={{color: 'blue',textDecorationLine: 'underline',marginTop:"3%"}}
      onPress={() => Linking.openURL('https://ieeexplore.ieee.org/document/8538702')}>
     . IOT system
    </Text>
    </View>
    </ScrollView>
    </View>
  )
}

export default Help

const styles = StyleSheet.create({
  container: {
    paddingTop:70,
    alignItems:"center",
    // marginLeft:150
    paddingLeft:"40%",
    paddingRight:"40%"
  },
  tinyLogo: {
    width: 56,
    height: 84,

  },

});