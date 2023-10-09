import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { height, width } from '../util'

const ButtonS = ({label="label",onPress,loading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{height:height/18.8,width:width/1.2,marginVertical:height/16,justifyContent:'center',alignItems:'center',backgroundColor:'aqua',borderRadius:10,}}>
      {loading ?<ActivityIndicator/>:  <Text style={{color:'black',fontWeight:'bold',textTransform:'capitalize'}}>{label}</Text>}
    </TouchableOpacity>
  )
}

export default ButtonS

const styles = StyleSheet.create({})