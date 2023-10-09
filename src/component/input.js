import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { height, width } from '../util'
const InputBox = ({label="label",onChangeText,value,placeholder}) => {
  return (
    <View style={{height:height/18.8,width:width/1.2,marginVertical:10}}>
        <Text style={{color:'black',fontWeight:'bold'}}>{label}</Text>
     <TextInput onChangeText={onChangeText} value={value} placeholder={placeholder} style={{height:height/19,borderRadius:5,padding:2,fontWeight:'400',borderWidth:0.5,borderColor:'lightblue'}}/>
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({})