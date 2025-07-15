import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import CITY_LIST from './data/city.json';
import Icon from "react-native-vector-icons/Ionicons";
import { baseUrl , apiKey} from './AK';
import Pannel from './Pannel';
const AQI = () => {

    const [open,setOpen] = useState(false);
    const [value,setValue] = useState(null);
    const [items , setItems] = useState(CITY_LIST);

    const [lat, setLat] = useState();
    const [lng, setLng] = useState();


    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        setData();
        const cityData = items.filter((val) => val.city === value);
        if (cityData.length > 0) {
            setLat(cityData[0].lat);
            setLng(cityData[0].lng);
        }
    }, [items , value]);

    useEffect(() => {
        const apiCalling = async () => {
            try {
                const response = await fetch(
                    `${baseUrl}/forecast?lat=${lat}&lon=${lng}&appid=${apiKey}`
                );
                const json = await response.json();
                setData(json.list);
                setError(null);
            } catch(err) {
                setError(err);
            }
        };
        if(lat && lng) {
            apiCalling(lat,lng);
        }
    }, [lat,lng]);

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

  return (
    <View>
        <View style={styles.header}>
      <Text style={styles.appName}>Air Quality Forecast</Text>
    
    <View style={{paddingTop:"5%"}}>
          <DropDownPicker
                open={open}
                searchable
                searchPlaceholder='Type to get the city'
                searchTextInputStyle={{
                    borderWidth:0,
                    fontWeight:'700',
                }}
                searchContainerStyle={{
                    paddingVertical:15,
                    borderBottomColor:'#FF6A65',
                }}
                placeholder="Select a city"
                placeholderStyle={{
                    color:'#838383',
                }}
                containerStyle={{
                    // margin:15,
                    // width:-30,
                }}
                labelStyle={{
                    color:'#242334',
                    fontWeight:"bold",
                    fontSize:16,
                }}
                listItemLabelStyle={{
                    color:'#242334',
                    fontWeight:'700',
                }}
                showTickIcon={false}
                dropDownContainerStyle={{
                    borderColor:'#242334',
                }}
                ArrowUpIconComponent={() =>
                    <Icon name="chevron-up-sharp" size={20} color={'#FF6A65'}/>
                }
                ArrowDownIconComponent={()=>
                    <Icon name="chevron-down-sharp" size={20} color={'#FF6A65'}/>
                }
                value={value}
                items={items.map(({city}) => ({
                    label:city,
                    value:city,
                }))}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
          />
        </View>
    </View>
    {
        data ? (
            <FlatList
                data = {data}
                renderItem = {({item}) => (
                    <View>
                        <Pannel data={item}/>
                    </View>
                )} 
            />
        ) :  (
            <View style={styles.noData}>
                <Text style={{ color:'#FF6A65',fontSize:18,fontWeight:'bold'}}>
                    {!value ? '- No Data -' : 'Data Loading...'}
                </Text>
            </View>
        )
    }
  </View>
  ) 
}

export default AQI

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#242334",
        alignItems:"center",
        paddingBottom:15,
        // zIndex:400,
        // elevation:400,
        
    },
    appName:{
        color: "white",
        paddingTop:10,
        fontWeight:'bold',
        fontSize: 18,
    },
    noData:{
       alignItems:"center",
       marginTop:100,
    },
    

})