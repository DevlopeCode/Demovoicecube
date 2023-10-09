import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { image } from '../res/image'
import InputBox from '../component/input'
import ButtonS from '../component/button'
import { auth } from '../../firebase'

import { signInWithEmailAndPassword } from "firebase/auth";
import { style } from '../style'
import AsyncStorage from '@react-native-async-storage/async-storage'
const LoginScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false)

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const onHandleLogin = async() => {
        setLoading(true)
        if (email !== "" && password !== "") {
          signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                AsyncStorage.setItem("userdata",JSON.stringify(res))
                setLoading(false)
                navigation.navigate('Welcome',{res})})
            .catch((err) => {            setLoading(false)
                ,Alert.alert("Login error", err.message)});
        }else{
            setLoading(false)
            Alert.alert("Black Fileds are not allowed")
        }
      };
  return (
    <View style={style.conatainer}>
        <View style={style.baseconationer}>
        <Image source={image.logo} style={style.logoimage}/>
        <InputBox label='Email' onChangeText={setEmail} value={email} placeholder={"Enter Email Address"}/>
         <InputBox label='Password' onChangeText={setPassword} value={password} placeholder={"Enter password"}/>
         <TouchableOpacity onPress={()=>navigation.navigate('Resetpassword')} style={style.normalButton}>
            <Text style={style.resettext}>
                Reset password
            </Text>
        </TouchableOpacity>
        <ButtonS loading={loading} label='Login' onPress={()=>onHandleLogin()}/>
       
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
            <Text style={style.resettext}>
                Dont Have Account ? create New
            </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen

