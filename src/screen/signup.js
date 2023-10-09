import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc ,} from 'firebase/firestore';
import { auth, database } from '../../firebase';
import { Image, StyleSheet, Text, TouchableOpacity, View ,Alert} from 'react-native'
import { image } from '../res/image'
import { height, width } from '../util'
import InputBox from '../component/input'
import ButtonS from '../component/button'
import { style } from '../style';
const SignupScreen = ({navigation}) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false)
    const onHandleSignup = async () => {
        setLoading(true)
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          const userRef = doc(database, "users", user.uid);
          await setDoc(userRef, {
            displayName: user.displayName,
            email: email,
            uid: user.uid,
            photoURL: user.photoURL || user.photoURL,
            phoneNumber: user.phoneNumber,
          });
          if (user) {
            setLoading(false)
            navigation.navigate('Login')
            Alert.alert('Sign Up Success')
          }
        } catch (error) {
            setLoading(false)

          Alert.alert(error.message);
        }
      };
  return (
    <View style={style.conatainer}>
        <View style={style.baseconationer}>
        <Image source={image.logo} style={style.logoimage}/>
        <InputBox label='Email' onChangeText={setEmail} value={email} placeholder={"Enter Email Address"}/>
         <InputBox label='Password' onChangeText={setPassword} value={password} placeholder={"Enter password"}/>
        <ButtonS loading={loading} label='SignUp' onPress={()=>onHandleSignup()}/>
        </View>
    </View>
  )
}
export default SignupScreen

const styles = StyleSheet.create({})