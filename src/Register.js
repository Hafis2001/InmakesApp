import React,{Component} from "react";
import { View,Text,StyleSheet, Image,TextInput,TouchableHighlight,ScrollView } from "react-native";

import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";

export default class Register extends Component{
   constructor(){
      super();
      this.state={
        name: null
      }
    }
    updatevalue(mobilenumber){
//   console.log(mobilenumber)
  this.setState({name:mobilenumber})
    }
    render(){
        return(
            <View >
                
              <ScrollView>
            <View style={styles.container} >
                
                <Image source={require('./img/logo.png')}
                    style={styles.logo}>
                </Image>
               
          
            
                
            </View>
            <View style={styles.viewf}>
            <Text style={styles.text}>Enter your mobile number</Text>
            <Text style={styles.text2}>we will send an OTP to verify</Text>
            </View>
                 <View style={styles.view}>
                    <View style={styles.inputview}>
                        <TextInput
                        style={styles.inputnum}
                        placeholder='+91'
                        placeholderTextColor='#ffffff'>

                        </TextInput>
                  <TextInput
                  style={styles.input}
                  placeholder='mobilenumber'
                  placeholderTextColor='grey'
                  keyboardType="numeric"
                  onChangeText={(mobilenumber)=>this.updatevalue(mobilenumber)}>
                 
                  </TextInput>
                  </View>
                  <TouchableHighlight style={styles.button}
                  underlayColor='transparent'
                  onPress={()=> this.props.navigation.navigate('OTP',{mobilenumber:this.state.name})}>
                     <Text style={styles.buttontext}>continue</Text>
                  </TouchableHighlight>
                 </View>
                 
           
            
                
                 </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
         alignItems:'center',
        // justifyContent:'center',
        backgroundColor:'#ffffff',
        marginTop:50
        
        },
     logo:{
        height:75,
        width:'80%',
      
        
     },
     view:{
        height:hp('50%'),
        width:wp('100%'),
      //   marginTop:20,
        backgroundColor:'#001a33',
        borderRadius:20
     },
     text:{
        fontSize:24,
        fontWeight:'500',
      //   alignItems:'center',
        color:'#000000',
        marginTop:400,

        
        // justifyContent:'center',
        // marginBottom:200
     },
     text2:{
         color:'grey',
         fontSize:18,
         marginBottom:20
         
     },
     inputnum:{
        width:wp('15%'),
        height:hp('10%'),
        backgroundColor:'#4d4dff',
        marginLeft:10,
        marginTop:20,
        borderRadius:5

     },
     input:{
        width:wp('75%'),
        height:hp('10%'),
        // color:' #4d4dff',
        backgroundColor:'#4d4dff',
        marginTop:20,
        marginLeft:10,
        borderRadius:5,
        
        
     },
     inputview:{
        flexDirection:'row'
     },
     button:{
      width:wp('90%'),
      height:hp('10%'),
      backgroundColor:'#5cd65c',
      alignItems:'center',
      justifyContent:'center',
      marginTop:10,
      marginLeft:15,
      borderRadius:7
     },
     buttontext:{
      fontSize:20,
      fontWeight:'900',
      color:'#ffffff'
     },
     viewf:{
      // marginTop:400,
      alignItems:'center',
      
     }
  
})
