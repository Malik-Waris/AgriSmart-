import { StyleSheet, Text, ImageBackground,View,Image,TextInput,
  TouchableOpacity,Pressable,ScrollView,onPressFunction, Alert} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../config';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';


WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword]  = useState('');

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email,password)
      .then((user) => {
        Alert.alert("Login","Login Successfull!");
        navigation.navigate('Home');
      })
      .catch((error) => {
        alert(error.message);
      })
    } catch (error) {
      alert(error.message);
    }
  }



  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promtAsync] = Google.useIdTokenAuthRequest({
    clientId: "694754240756-c3resjpt7vpnio1k659ipdatcjk76b5f.apps.googleusercontent.com",
    iosClientId: "694754240756-93ginldie79gkkq8jbeojvamp5i1m55h.apps.googleusercontent.com",
    androidClientId: "694754240756-00rdjah4mhe853liamoudq68ebfv7dna.apps.googleusercontent.com"
  });


  React.useEffect(() => {
    if(response?.type == "success"){
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
      Alert.alert("Login","Login Successfull!");
      navigation.navigate('Home');
    }
  }, [response, accessToken])


  async function fetchUserInfo(){
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}`}
    });
    const userinfo = await response.json();
    setUser(userinfo);
  }

  googleLogin = () => {
    Alert.alert("Developer","Coming soon....")
  }



  return (
    <View style={{width:"100%",height:"100%"}}>
      <ScrollView style={{backgroundColor: 'transparent'}}>
    <View style={styles.container}>
         <Text style={{color:"#6CBE6E",fontSize:35,fontWeight:'bold',marginTop:-1}}>Agri</Text>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/leaf.png")}
      />
      <Text style={{color:"#6CBE6E",fontSize:35,fontWeight:'bold',marginLeft:"63%",marginTop:"-20%"}}>Smart</Text>
    </View>
    <View>
        <Text style={{color:"#6CBE6E",fontSize:20,fontWeight:'bold',paddingTop:50,alignItems:"center",marginLeft:"42%"}}>LOGIN !</Text>
    </View>
    <View style={{paddingTop:30,alignContent:"center",marginLeft:"10%"}}>
        <TextInput style={{borderRadius:100,color:"green",paddingHorizontal:10,width:"90%"
        ,backgroundColor:"#CCE3DA",padding:10 }}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        placeholderTextColor={"green"}></TextInput>
    </View>
    <View style={{paddingTop:30,alignContent:"center",marginLeft:"10%"}}>
        <TextInput style={{borderRadius:100,color:"green",paddingHorizontal:10,width:"90%"
        ,backgroundColor:"#CCE3DA",padding:10 }}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
        placeholderTextColor={"green"}></TextInput>
    </View>
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
      <Text style={{color:"green",marginLeft:"12%", marginTop:"5%",fontSize:16}}>Forgot Password</Text>
    </TouchableOpacity>
    </View>
    <View style={{paddingTop:2,alignContent:"center",marginLeft:40,marginRight:40}}>
    <TouchableOpacity onPress={() => loginUser(email,password)}>
        <View style={{backgroundColor:'green',padding:10,marginTop:20,
                      alignItems:"center",borderWidth:3,borderColor:"green", borderRadius:20}}>
            <Text style={{color:"white"}}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <Text style={{fontStyle:"italic",fontWeight:"bold",marginTop:"5%",marginLeft:"50%",marginBottom:"5%"}}>or</Text>
      
      <TouchableOpacity onPress={() => {promtAsync();}}>
        <View style={{backgroundColor:'black',padding:1,borderWidth:3,borderColor:"black",paddingLeft:"10%", 
        borderRadius:20,flex:1,flexDirection:"row",alignItems:"center"}}>
            <Image style={{height:39, width:35}} 
            source={require("../assets/google.png")}/>
            <View style={{alignItems:"center",paddingLeft:"10%"}}>
              <Text style={{color:"white",fontSize:18}}>Login with Google</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
      <Text style={{color:"green",marginLeft:"12%", marginTop:"5%"}}>Didn't have an account? SignUp</Text>
    </TouchableOpacity>
    </View>
    <View style={{marginTop:"12%",marginLeft:"5%"}}>
    <TouchableOpacity onPress={() => navigation.navigate('Help')} >
    <Text style={{color:"green",marginLeft:"80%",marginTop:"-1%"}}>HELP?</Text>
    </TouchableOpacity>
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

export default Login

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      alignItems:"center"
    },
    tinyLogo: {
      width: 150,
      height: 180,
    },
    logo: {
      paddingTop: 20,
      alignItems:"baseline",
      marginLeft:"10%"
    },
  });