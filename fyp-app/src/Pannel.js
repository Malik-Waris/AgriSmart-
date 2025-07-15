import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon  from 'react-native-vector-icons/Ionicons';

const Pannel = (props) => {
    const {data} = props;

    const [airQuality , setAirQuality] = useState();

    const [collapse,setCollapse] = useState(false);

    const [date] = useState(new Date(data.dt * 1000).toLocaleDateString('en-GB'));
    const [time] = useState(new Date(data.dt * 1000).toLocaleTimeString('en-GB').slice(0,5));

    useEffect(() => {
        switch(data.main.aqi){
            case 1: setAirQuality('Good');
                break;
            case 2: setAirQuality('Fair');
                break;
            case 3: setAirQuality('Moderate');
                break;
            case 4: setAirQuality('Poor');
                break;
            case 5: setAirQuality('Very Poor');
                break;
            default: setAirQuality('Not Identified');
        }
    }, [data]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        setCollapse(!collapse);
      }}>
        <View style={styles.row}> 
            <View>
                <Text style={styles.date}>
                {date}
                {'|'} 
                {time}
                </Text>
                <Text style={styles.index}>
                    Quality Index:
                    {''}
                    {data.main.aqi}
                    {''}
                    ({airQuality})
                </Text>
            </View>
            <Icon name={!collapse ? "chevron-down-sharp" : "chevron-up-sharp"} size={25} color='#FF6A65'/>
        </View>
      </TouchableOpacity>
      {
        collapse && (
            <View>
            <View style={styles.row}>
                <View >
                    <Text>CO</Text>
                </View>
                <View style={styles.txtRow}>
                    <Text style={styles.subtitle}>{data.components.co}</Text>
                    <Text style={styles.subtitle}>μg/m</Text>
                    <Text style={styles.subtitleSub}>3</Text>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.row}>
                <View >
                    <Text>NO</Text>
                </View>
                <View style={styles.txtRow}>
                    <Text style={styles.subtitle}>{data.components.no}</Text>
                    <Text style={styles.subtitle}>μg/m</Text>
                    <Text style={styles.subtitleSub}>3</Text>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.row}>
                <View >
                    <Text>NO2</Text>
                </View>
                <View style={styles.txtRow}>
                    <Text style={styles.subtitle}>{data.components.no2}</Text>
                    <Text style={styles.subtitle}>μg/m</Text>
                    <Text style={styles.subtitleSub}>3</Text>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.row}>
                <View >
                    <Text>S02</Text>
                </View>
                <View style={styles.txtRow}>
                    <Text style={styles.subtitle}>{data.components.so2}</Text>
                    <Text style={styles.subtitle}>μg/m</Text>
                    <Text style={styles.subtitleSub}>3</Text>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.row}>
                <View >
                    <Text>PM2</Text>
                </View>
                <View style={styles.txtRow}>
                    <Text style={styles.subtitle}>{data.components.pm2_5}</Text>
                    <Text style={styles.subtitle}>μg/m</Text>
                    <Text style={styles.subtitleSub}>3</Text>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.row}>
                <View >
                    <Text>PM10</Text>
                </View>
                <View style={styles.txtRow}>
                    <Text style={styles.subtitle}>{data.components.pm10}</Text>
                    <Text style={styles.subtitle}>μg/m</Text>
                    <Text style={styles.subtitleSub}>3</Text>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.row}>
                <View >
                    <Text>03</Text>
                </View>
                <View style={styles.txtRow}>
                    <Text style={styles.subtitle}>{data.components.o3}</Text>
                    <Text style={styles.subtitle}>μg/m</Text>
                    <Text style={styles.subtitleSub}>3</Text>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.row}>
                <View >
                    <Text>NH3</Text>
                </View>
                <View style={styles.txtRow}>
                    <Text style={styles.subtitle}>{data.components.nh3}</Text>
                    <Text style={styles.subtitle}>μg/m</Text>
                    <Text style={styles.subtitleSub}>3</Text>
                </View>
            </View>
            <View style={styles.line}/>
          </View>
        )
      }
    </View>
  )
}

export default Pannel

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginTop:20,
        backgroundColor:'#F1F1F3',
        padding:15,
        borderRadius:5,
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:'center',
        marginVertical:10,
    },
    date:{
        fontWeight:"bold",
        fontSize:16,
        color:'#242334',
    },
    index:{
        paddingTop:5,
        fontWeight:"bold",
        fontSize:14,
        color:'#FF6A65',
    },
    txtRow: {
        flexDirection: 'row',
      },
      title: {
        color: '#242334',
        fontWeight: '600',
      },
      titleSub: {
        color: '#242334',
        fontWeight: '600',
        lineHeight: 25,
      },
      subtitle: {
        color: '#242334',
        fontWeight: '600',
      },
      subtitleSub: {
        color: '#242334',
        fontWeight: '600',
        lineHeight: 15,
      },
      line: {
        height: 1,
        backgroundColor: '#838383',
      },
})