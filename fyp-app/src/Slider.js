import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'

const images = [
    'https://media.istockphoto.com/id/1418029647/photo/polycarbonate-greenhouse-for-growing-vegetables.jpg?b=1&s=170667a&w=0&k=20&c=3Bx1v1QFkRhlMtDEJ-jp2bKqRixM0yRmmdtdaV2XGto=',
     'https://cdn.pixabay.com/photo/2020/04/06/11/22/seedling-5009286__480.jpg',
     'https://media.istockphoto.com/id/1365090616/photo/smart-farming-agricultural-technology-and-organic-agriculture-woman-holding-ear-of-rice-and.jpg?b=1&s=170667a&w=0&k=20&c=Wce2oRLdGntNXo0HqzcYeW_Ca1XBeDEJHpaDppyXlBI=',
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Slider = () => {
    const [imgActive , setimgActive] = useState(0);

    onchange = (nativeEvent) => {
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }

    }
  return (
    <SafeAreaView style={styles.container}>
         
          
         <View >
          <Text style={styles.headerText}>CROPCYCLE</Text>
          <Text style={styles.title}>CROP | ....</Text>
        </View>
        <View style={styles.wrap}>
            
            <ScrollView 
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
            >
                {
                    images.map((e, index) =>
                     <Image
                      key={e}
                      resizeMode="cover"
                      style={styles.wrap}
                      source={{uri: e}}
                     ></Image>
                    )
                }
            </ScrollView>
            <View style={styles.wrapDot}>
                {
                    images.map((e, index) =>
                    <Text
                     key={e}
                     style={imgActive == index ? styles.dotActive : styles.dot}
                    >
                        ●
                    </Text>
                    
                    )
                }
            </View>
        </View>
    </SafeAreaView>
    
  )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    container1: {
       
    },
    wrap:{
        width : WIDTH,
        height : HEIGHT * 0.25,
    },
    wrapDot:{
        position:"absolute",
        bottom:0,
        flexDirection:'row',
        alignSelf:"center",
    },
    dotActive:{
        margin:3,
        color:"black",
    },
    dot:{
        margin:3,
        color:"white"
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
})