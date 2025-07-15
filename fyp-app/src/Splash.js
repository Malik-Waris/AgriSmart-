import { Button ,Pressable,StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import Main from './Main'

const Home = ({ navigation }) => {
  return (
    <Main>
    <View style={{marginHorizontal:95,marginVertical:85}}>
      </View>
     <View style={{marginHorizontal:40 , marginVertical:100}}>
     <Text style={{color:'white' , fontSize: 64}}>Lets get</Text>
      <Text style={{color:'white' , fontSize: 64}}>started</Text>
      <Text style={{color:'white' , fontSize: 20 ,  }}>Getting things ready for you!</Text>
      <View>
      {/* <Button title='Click me' color={"red"}></Button> */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={{backgroundColor:'red',padding:10,marginTop:50,marginRight:-30,
                      alignItems:"center",borderWidth:3,borderColor:"red", borderRadius:20}}>
            <Text style={{color:"white"}}>Continue</Text>
        </View>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity>
        <View style={{backgroundColor:'white',padding:10,marginTop:20,marginLeft:0,marginRight:-30,
                      alignItems:"center",borderWidth:3,borderColor:"white", borderRadius:20}}>
            <Text style={{color:"red"}}>Exit</Text>
        </View>
      </TouchableOpacity>
      </View>
     </View>
    </Main>
  )
}

export default Home

const styles = StyleSheet.create({})