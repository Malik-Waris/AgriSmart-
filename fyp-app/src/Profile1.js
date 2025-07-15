import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {firebase} from '../config';
import {collection, setDoc, doc, getDoc} from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
//import * as ImagePicker from 'expo-image-picker';
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
  } from 'react-native-paper';

  export default function UploadImage() 
  {
  // const [image, setImage] = useState(null);
  // const addImage= async () => {
  //   let _image = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       aspect: [4,3],
  //       quality: 1,
  //   });
  //     console.log(JSON.stringify(_image));
  // if (!_image.cancelled) {
  //   setImage(_image.uri);
  // }
  // const  checkForCameraRollPermission=async()=>{
  //   const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
  //   if (status !== 'granted') {
  //     alert("Please grant camera roll permissions inside your system's settings");
  //   }else{
  //     console.log('Media Permissions are granted')
  //   }
  //   }
  //   useEffect(() => {
  //       checkForCameraRollPermission()
  //     }, []);  
  // }

  return (
    <SafeAreaView style={styles.container2}>
    <ScrollView style={{ backgroundColor: "transparent" }}>
    <View style={styles.container1}>
            <View style={styles.container}>
                {
                    image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                }
                    <View style={styles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={styles.uploadBtn} >
                            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                            <AntDesign name="camera" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
            </View>
            <View>
            <Title style={styles.title}>--------------</Title>
            </View>
    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name="map-marker-radius" size={20} color="#777777"> </Icon>
        <Text style={{color:"#777777",marginLeft:20}}>Islamabad, Pakistan</Text>
      </View>
      <View style={styles.row}>
        <Icon name="phone" size={20} color="#777777"> </Icon>
        <Text style={{color:"#777777",marginLeft:20}}>phone</Text>
      </View>
      <View style={styles.row}>
        <Icon name="email" size={20} color="#777777"> </Icon>
        <Text style={{color:"#777777",marginLeft:20}}>email</Text>
      </View>
    </View>
    <View style={styles.menuWrapper1}>
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
     </View>
     <View style={{paddingTop:2,alignContent:"center",marginLeft:130,marginRight:130}}>
    <TouchableOpacity onPress={() => logoutUser()}>
        <View style={{backgroundColor:'black',padding:10,paddingleft:17,marginTop:20,
                      alignItems:"center",borderWidth:3,borderColor:"black", borderRadius:20}}>
            <Text style={{color:"white"}}>LOGOUT</Text>
        </View>
      </TouchableOpacity>
    </View>
     </ScrollView>
     </SafeAreaView>
  );
}
const styles=StyleSheet.create({
    container:{
        elevation:2,
        height:200,
        width:200,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop:"5%",
        marginLeft:"1%",
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      userInfoSection: {
        paddingHorizontal: 30,
        marginTop:"3%",
        marginBottom: 25,
      },
      row: {
        flexDirection: 'row',
        marginLeft:"-59%",
        marginBottom: 10,
      },
      menuWrapper: {
        marginTop:"-3%",
        marginLeft:"-68%",
      },
      menuWrapper1: {
        marginTop:"-3%",
        marginLeft:"-72%",
      },
    container1: {
        padding:25,
        paddingBottom:35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})