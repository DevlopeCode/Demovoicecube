// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { EmailAuthProvider, getAuth,reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Alert } from "react-native";


const firebaseConfig = {
apiKey: "AIzaSyALZsg0yIxAwcnKIXClvaITyTewtj4vrzc",
authDomain: "demovoicecube.firebaseapp.com",
projectId: 'demovoicecube',
storageBucket: "demovoicecube.appspot.com",
messagingSenderId: "674433474575",
appId: "1:674433474575:web:dcf520ae67bd0d2bde837a",
};
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
export const resetUserPassword = async (curentpassword,newpassword) => {
    const user = auth.currentUser;
  
    const cred = EmailAuthProvider.credential(user.email, curentpassword);
  
    try {
      await reauthenticateWithCredential(user, cred)
     
      // User entered correct credentials
      // Update password
     const res= await updatePassword(auth.currentUser, newpassword);
     Alert.alert("password Change Successed");
    } catch (e) {
      Alert.alert(e.message)
      // Could be incorrect credentials
    }
  } 