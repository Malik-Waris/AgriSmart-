import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image,ImageBackground,StyleSheet , Text, TextInput,SafeAreaView, 
  ScrollView,TouchableOpacity,Pressable,onPressFunction, Alert} from 'react-native';
import {firebase} from '../config';

const SignUp = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword]  =useState('');
  const [cPassword, setCPassword]  =useState('');
  const [name, setName] = useState('');
  const [phone, setPhone]  =useState('');
  

  signUpUser = async (name, phone, email, password, cPassword) => {
    if (password == cPassword) {
      try {
        //auth
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          //firestore
          const userid = firebase.auth().currentUser.uid;
          firebase.firestore().collection('users').doc(userid).set({
            name: name,
            email:email,
            phone: phone,
          })
            .then((docRef) => {
              Alert.alert("SignUp","SignUp Successfull!");
              navigation.navigate('Home');
            })
            .catch((error) => {
              console.error('Error adding user data: ', error);
            });
        })
        //auth catch block
        .catch((error) => {
          Alert.alert("Exception",error.message);
        })
      } catch (error) {
        Alert.alert("Exception",error.message);
      }
    }else{
      Alert.alert("Error","Password and Confirm Password didn't match!");
    }
  }


  return (
    <View style={{ width: "100%", height: "100%" }}>
      <SafeAreaView>
        <ScrollView style={{ backgroundColor: "transparent" }}>
          <View style={styles.container}>
            <Text
              style={{ color: "#6CBE6E", fontSize: 22, fontWeight: "bold" }}
            >
              Agri
            </Text>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/leaf.png")}
            />
            <Text
              style={{
                color: "#6CBE6E",
                fontSize: 22,
                fontWeight: "bold",
                marginLeft: "35%",
                marginTop: "-10%",
              }}
            >
              Smart
            </Text>

            <View>
              <Text
                style={{
                  color: "#6CBE6E",
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingTop: 30,
                  alignItems: "center",
                  marginLeft: "20%",
                }}
              >
                SignUp for FREE!
              </Text>
              <Text style={{ color: "#6CBE6E", fontSize: 20, paddingTop: 6 }}>
                For creating account : You must
              </Text>
              <Text
                style={{ color: "#6CBE6E", fontSize: 20, marginLeft: "5%" }}
              >
                fill the required instructions
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingTop: 30,
              alignContent: "center",
              marginLeft: "10%",
            }}>
            <TextInput
              style={{
                borderRadius: 100,
                color: "green",
                paddingHorizontal: 10,
                width: "90%",
                backgroundColor: "#CCE3DA",
                padding: 10,
              }}
              placeholder="Enter Your Name"
              onChangeText={(name) => setName(name)}
              placeholderTextColor={"green"}
            ></TextInput>
          </View>

          <View
            style={{
              paddingTop: 15,
              alignContent: "center",
              marginLeft: "10%",
            }}
          >
            <TextInput
              style={{
                borderRadius: 100,
                color: "green",
                paddingHorizontal: 10,
                width: "90%",
                backgroundColor: "#CCE3DA",
                padding: 10,
              }}
              placeholder="Enter Your Email"
              onChangeText={(email) => setEmail(email)}
              placeholderTextColor={"green"}
            ></TextInput>
          </View>

          <View
            style={{
              paddingTop: 15,
              alignContent: "center",
              marginLeft: "10%",
            }}
          >
            <TextInput
              style={{
                borderRadius: 100,
                color: "green",
                paddingHorizontal: 10,
                width: "90%",
                backgroundColor: "#CCE3DA",
                padding: 10,
              }}
              placeholder="Enter Your Phone#"
              onChangeText={(phone) => setPhone(phone)}
              placeholderTextColor={"green"}
            ></TextInput>
          </View>

          <View
            style={{
              paddingTop: 15,
              alignContent: "center",
              marginLeft: "10%",
            }}
          >
            <TextInput
              style={{
                borderRadius: 100,
                color: "green",
                paddingHorizontal: 10,
                width: "90%",
                backgroundColor: "#CCE3DA",
                padding: 10,
              }}
              placeholder="Enter Password"
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={true}
              placeholderTextColor={"green"}
            ></TextInput>
          </View>

          <View
            style={{
              paddingTop: 15,
              alignContent: "center",
              marginLeft: "10%",
            }}
          >
            <TextInput
              style={{
                borderRadius: 100,
                color: "green",
                paddingHorizontal: 10,
                width: "90%",
                backgroundColor: "#CCE3DA",
                padding: 10,
              }}
              placeholder="Re-Enter Password"
              onChangeText={(cPassword) => setCPassword(cPassword)}
              secureTextEntry={true}
              placeholderTextColor={"green"}
            ></TextInput>
          </View>

          <View
            style={{
              paddingTop: 5,
              alignContent: "center",
              marginLeft: "10%",
              marginRight: "9%",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                signUpUser(name, phone, email, password, cPassword)
              }
            >
              <View
                style={{
                  backgroundColor: "green",
                  padding: 10,
                  marginTop: 30,
                  alignItems: "center",
                  borderWidth: 3,
                  borderColor: "green",
                  borderRadius: 90,
                }}
              >
                <Text style={{ color: "white" }}>REGISTER</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: "12%", marginLeft: "5%" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "green", marginLeft: "3%" }}>LOGIN?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Help')}>
              <Text style={{ color: "green", marginLeft: "80%", marginTop: "-5%" }}>
                HELP?
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      <ImageBackground
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
        source={require("../assets/Design.png")}
      />
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      alignItems:"center"
    },
    tinyLogo: {
      width: 80,
      height: 90,
    },
  
  });
  


















































// import React from 'react';
// import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
//   },
//   scrollView: {
//     backgroundColor: 'pink',
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 42,
//   },
// });

// export default App;