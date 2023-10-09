
import React, { useState } from 'react'
import { Alert, Image, View} from 'react-native'
import { image } from '../res/image'
import InputBox from '../component/input'
import ButtonS from '../component/button'
import { style } from '../style';
import { auth, resetUserPassword } from '../../firebase'
const ResetpasswordScreen = ({navigation}) => {
    const [password, setPassword] = useState('')
    const [confrimpassword, setConfrimpassword] = useState('')
const handelPassword =async()=>{
  if (password!=='',confrimpassword!=='') {
    try {
     await   resetUserPassword(password,confrimpassword)
             navigation.goBack()

    } catch (error) {
        Alert.alert(error.message)
    }
  }else{
        Alert.alert("invalid password")
  }
}
  return (
    <View style={style.conatainer}>
    <View style={style.baseconationer}>
    <Image source={image.logo} style={style.logoimage}/>
    <InputBox label='Old Password' onChangeText={setPassword} value={password} placeholder={"Old Password"}/>
     <InputBox label='New Password' onChangeText={setConfrimpassword} value={confrimpassword} placeholder={"New password"}/>
    <ButtonS label='Set Password' onPress={()=>handelPassword()} />
    </View>
</View>
  )
}

export default ResetpasswordScreen


