import React, {Component} from "react";
import { Text, View } from "react-native";

export default class Analytics  extends Component{
   render(){
    return(
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <Text style={{fontSize:16,
            color:'#000000',fontWeight:'bold'}}>this is analytics page </Text>
        </View>
    )
   }
}
 
