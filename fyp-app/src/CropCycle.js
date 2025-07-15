import { StyleSheet, Text, View,Image,Pressable,Alert,TextInput, TouchableOpacity,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'

const CropCycle = () => {
  return (
    
    <View style={{ width: "100%", height: "100%" }}>
      <SafeAreaView>
        <ScrollView style={{ backgroundColor: "transparent" }}>
        <View style={styles.container}>
          <Text style={styles.headerText}>CROPCYCLE</Text>
          <Text style={styles.title}>CROP | ....</Text>
        </View>

        <View style={{flexDirection:"row", height:220,width:"100%",paddingTop:"3%",paddingBottom:"2%"}}>
        
          <View style={{width:"45%",backgroundColor:"white",marginLeft:"3%",alignItems:"center",paddingTop:"4%",borderRadius:20}}>
          
            <Image
              source={require("../assets/cotton.png")}
              style={styles.AImage}></Image>
              <TouchableOpacity onPress={() => touch()}>
              <Text style={{paddingTop:"5%",fontSize:22,}}>
                Cotton
              </Text>
              </TouchableOpacity>
            </View>
          
          <View style={{width:"45%",backgroundColor:"white",marginLeft:"4%",alignItems:"center",paddingTop:"4%",borderRadius:20}}>
            <Image
              source={require("../assets/wheat.png")}
              style={styles.AImage}></Image>
              <TouchableOpacity onPress={() => touch()}>
              <Text style={{paddingTop:"5%",fontSize:22,}}>
                Water Level
              </Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection:"row", height:220,width:"100%",paddingTop:"3%",paddingBottom:"2%"}}>
          <View style={{width:"45%",backgroundColor:"white",marginLeft:"3%",alignItems:"center",paddingTop:"4%",borderRadius:20}}>
            <Image
              source={require("../assets/barley.png")}
              style={styles.AImage}></Image>
              <TouchableOpacity onPress={() => touch()}>
              <Text style={{paddingTop:"5%",fontSize:22,}}>
                Rain Sensor
              </Text>
              </TouchableOpacity>
          </View>
          <View style={{width:"45%",backgroundColor:"white",marginLeft:"4%",alignItems:"center",paddingTop:"2%",borderRadius:20}}>
            <Image
              source={require("../assets/corn.png")}
              style={styles.AImage}></Image>
              <TouchableOpacity onPress={() => touch()}>
              <Text style={{paddingTop:"5%",fontSize:22,}}>
                Temperature
              </Text>
              </TouchableOpacity>
          </View>
        </View>
        
        </ScrollView>
      </SafeAreaView>
    </View>
    
  )
}


export default CropCycle

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
      height:"70%",
      width:"75%",
      borderRadius:20,
    }
})