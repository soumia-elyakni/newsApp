import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text , View, StatusBar, Image } from 'react-native'
import { TouchableOpacity } from 'react-native';
import Img from "./assets/logo.jpg"


const LoadScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'grey'}}>
    <StatusBar barStyle="light-content" hidden={false}  />
    <Image  source={Img} />
  <TouchableOpacity onPress={()=>navigation.navigate("News")}>
  <Text>See News</Text>
  </TouchableOpacity>


    </View>
  )
}

export default LoadScreen