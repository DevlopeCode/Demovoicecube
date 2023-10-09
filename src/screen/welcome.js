import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WelcomeScreen = ({naviagation,route}) => {
    console.log(route.params.res._tokenResponse.email);

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontWeight:'bold'}}> Welcome {route.params.res._tokenResponse.email}</Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})