import { StyleSheet, ScrollView, ImageBackground,Text, View,Image,TextInput,TouchableOpacity, Alert} from 'react-native'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../config';

const ForgetPassword = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  resetPasswordLink = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
      .then((user) => {
        Alert.alert("Forget Password","Please check your email...");
        navigation.navigate('Login');
      }).catch(function (e) {
        Alert.alert("Exception",e)
      })
  }
  return (
    <View style={{width:"100%",height:"100%"}}>
      <ScrollView style={{backgroundColor: 'transparent'}}>
      <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/lock.png")}
      />
    </View>
    <View style={{paddingLeft:"24%"}}>
      <Text style={{color:"red",paddingTop:"6%",alignContent:"center",fontSize:27,fontWeight:'bold'}}>Forget Password!</Text>
    </View>
    <View>
      <Text style={{color:"red",paddingLeft:"10%", paddingRight:"10%",fontSize:18,paddingTop:4,fontWeight:'bold'
    ,fontStyle:"italic"}}>Enter your Email address to retrieve your account</Text>
    </View>
    
    <View>
    <View style={{paddingTop:40,alignContent:"center",marginLeft:"8%",marginRight:"4%"}}>
        <TextInput style={{borderRadius:100,color:"green",paddingHorizontal:10,width:"90%"
        ,backgroundColor:"#CCE3DA",padding:10 }}
        placeholder="Enter Your Email"
        onChangeText={(email) => setEmail(email)}
        placeholderTextColor={"green"}></TextInput>
    </View>
    <View style={{paddingTop:"50%",alignContent:"center",marginLeft:"10%",marginRight:"13%"}}>
    <TouchableOpacity onPress={() => resetPasswordLink(email)}>
        <View style={{backgroundColor:'#EFA147',padding:10,marginTop:30,
                      alignItems:"center",borderWidth:3,borderColor:"#EFA147", borderRadius:90}}>
            <Text style={{color:"white"}}>Reset Password</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
    <ImageBackground style={{position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1}}
      source={require("../assets/Design.png")}/>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  container: {
    paddingTop:70,
    alignItems:"center",
    // marginLeft:150
    paddingLeft:"40%",
    paddingRight:"40%"
  },
  tinyLogo: {
    width: 90,
    height: 90,

  },

});