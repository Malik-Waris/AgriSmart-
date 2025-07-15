import React, { Children } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = { uri: "https://reactjs.org/logo-og.png" };

const Main = ({children}) => (
  <View style={styles.container}>
    <ImageBackground source={require("../assets/countryside.jpg")} resizeMode="cover" style={styles.image}>
    </ImageBackground>
    <View style={{position:"absolute"}}>
        {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default Main;