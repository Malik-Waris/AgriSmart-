import {View, SafeAreaView, StyleSheet,Text,TouchableOpacity, Alert} from 'react-native';
import React,{useState, useEffect} from 'react';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';
import {firebase} from '../config';
import {collection, setDoc, doc, getDoc} from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Profile = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone]  =useState(null);
    const userid = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    useEffect(() => {
      
      const ReadData = async() => {
        const docRef = doc(db, "users", userid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
          setEmail(docSnap.data().email);
          setName(docSnap.data().name);
          setPhone(docSnap.data().phone);
        }
      }
      ReadData();
    }, []);
    
    logoutUser = async () => {
      try {
        await firebase.auth().signOut()
        .then(() => {
          Alert.alert("Profile","Logout Successfull!");
          navigation.navigate('Login');
        })
        .catch((error) => {
          alert(error.message);
        })
      } catch (error) {
        alert(error.message);
      }
    }


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.userInfoSection}>
      <View style={{flexDirection:'row',marginTop:15,marginLeft:"30%"}}>
        <Avatar.Image
        source={require("../assets/4.jpeg")} size={140}/>
      </View>
      <View>
        <Title style={styles.title}>--------------</Title>
        <Caption style={styles.caption}>{name}</Caption>
      </View>
    </View>
    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name="map-marker-radius" size={20} color="#777777"> </Icon>
        <Text style={{color:"#777777",marginLeft:20}}>Islamabad, Pakistan</Text>
      </View>
      <View style={styles.row}>
        <Icon name="phone" size={20} color="#777777"> </Icon>
        <Text style={{color:"#777777",marginLeft:20}}>{phone}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="email" size={20} color="#777777"> </Icon>
        <Text style={{color:"#777777",marginLeft:20}}>{email}</Text>
      </View>
    </View>

    <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name='chip' size={20} color="#FF6347" ></Icon>
          <Text style={{color:"#777777"}}>Give Ratings</Text>
        </View>
      </TouchableRipple>
    </View>
    <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name='share-outline' size={20} color="#FF6347" ></Icon>
          <Text  style={{color:"#777777"}}>Tell Your Friends</Text>
        </View>
      </TouchableRipple>
    </View>
    <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name='chip' size={20} color="#FF6347" ></Icon>
          <Text  style={{color:"#777777"}}>Sensors Installed</Text>
        </View>
      </TouchableRipple>
    </View>
    <View style={{paddingTop:2,alignContent:"center",marginLeft:130,marginRight:130}}>
    <TouchableOpacity onPress={() => logoutUser()}>
        <View style={{backgroundColor:'black',padding:10,marginTop:20,
                      alignItems:"center",borderWidth:3,borderColor:"black", borderRadius:20}}>
            <Text style={{color:"white"}}>LOGOUT</Text>
        </View>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft:"30%",
    
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    marginLeft:"47%",
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
})