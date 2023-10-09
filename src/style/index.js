import { StyleSheet } from "react-native";
import { height ,width} from "../util";

export const style = StyleSheet.create({
    conatainer:{flex:1,alignItems:'center'},
    baseconationer:{flex:2,paddingTop:height/4.5,alignItems:'center'},
    logoimage:{height:height/7,width:width/3,resizeMode:'contain',borderRadius:15},
    resettext:{fontWeight:'500',textAlign:'right'},
    normalButton:{width:width/1.2,marginTop:10}

})