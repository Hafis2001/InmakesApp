import React,{Component, useState} from "react";
import { View,Text,StyleSheet, Image,TextInput,TouchableHighlight } from "react-native";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";

import Droppick from "./studentdrop";






export default class Student extends Component{
   constructor(){
      super();
      this.state={
        name: null
      }
    }
    updatevalue(fullname){
  console.log(fullname)
  this.setState({name:fullname})
    }
   
    updatevalue(email){
  console.log(email)
  this.setState({name:email})
    }
    render(){
        return(
            <View >
                
              
            <View style={styles.container} >
                
                <Image source={require('./img/logo.png')}
                  style={styles.logo}> 
                 </Image> 
               
                <Image source={require('./img/icon.png')}
                style={styles.iconStyle}>

                </Image>
            
                
            </View>
            <View style={styles.viewf}>
            <Text style={styles.text}>Student details</Text>
            
            </View>
                 <View style={styles.view}>
                    
                        
                  <TextInput
                  style={styles.input}
                  placeholder='Full Name'
                  placeholderTextColor='grey'                 
                  onChangeText={(fullname)=>this.updatevalue(fullname)}>
                 
                  </TextInput>
                  <TextInput
                  style={styles.input}
                  placeholder='E mail'
                  placeholderTextColor='grey'
                                 
                  onChangeText={(email)=>this.updatevalue(email)}
                  >
                 
                  </TextInput>
                  <Droppick/>
                 
                  
                  <TouchableHighlight style={styles.button}
                  underlayColor='transparent'
                  onPress={()=> this.props.navigation.navigate('SchoolBoard')}>
                     <Text style={styles.buttontext}>Register</Text>
                  </TouchableHighlight>
                 </View>
                 
           
            
                

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
      //   marginTop:50
        
        },
     logo:{
        height:75,
        width:'80%',
      
        
     },
     view:{
        height:hp('60%'),
        width:wp('100%'),
      //   marginTop:20,
        backgroundColor:'#001a33',
        borderRadius:20,
        marginTop:15
     },
     text:{
        fontSize:24,
        fontWeight:'500',
      //   alignItems:'center',
        color:'#000000',
        marginTop:250,

        
        // justifyContent:'center',
        // marginBottom:200
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
        width:wp('90%'),
        height:hp('10%'),
        // color:' #4d4dff',
        backgroundColor:'#4d4dff',
        marginTop:20,
        marginLeft:10,
        // padding:16,
        borderRadius:5,
        justifyContent:'center',

      
        
        
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
      
     },
     Dropdown:{
      width:"90%",
      height:50,
      borderRadius:10,
      borderWidth:.5,
      borderColor:"grey"
     },
  droptext:{
   justifyContent:'center',
   color:'grey',
   alignItems:'center'
  },
  icon:{
   width:20,
   height:20
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 80,
    height: 80,
    marginTop:40
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

})