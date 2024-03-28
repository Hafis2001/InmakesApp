import React,{Component} from "react";
import { View,Text,StyleSheet, Image,TextInput,TouchableHighlight,ScrollView } from "react-native";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
import  Icon  from "react-native-vector-icons/MaterialIcons";

export default class OTP extends Component{

   componentDidMount(){
      console.log(this.props.route.params.mobilenumber)
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
            <Text style={styles.text}>Verification code</Text>
            <Text style={styles.text2}>please tyoe the verification code sent to</Text>
            <Text style={styles.textnum}>+91 {this.props.route.params.mobilenumber}</Text>
                </View>
                 <View style={styles.view}>
                    <View style={styles.inputview}>
                        <TextInput
                        style={styles.inputnum}
                        placeholder=''
                        
                        keyboardType="numeric">

                        </TextInput>
                  <TextInput
                  style={styles.inputnum}
                  placeholder=''
                  placeholderTextColor='grey'
                  keyboardType="numeric">
                 
                  </TextInput>
                  <TextInput
                  style={styles.inputnum}
                  placeholder=''
                  placeholderTextColor='grey'
                  keyboardType="numeric">
                 
                  </TextInput>
                  <TextInput
                  style={styles.inputnum}
                  placeholder=''
                  placeholderTextColor='grey'
                  keyboardType="numeric">                 
                  </TextInput>
                  <TextInput
                  style={styles.inputnum}
                  placeholder=''
                  placeholderTextColor='grey'
                  keyboardType="numeric">
                 
                  </TextInput>
                  <TextInput
                  style={styles.inputnum}
                  placeholder=''
                  placeholderTextColor='grey'
                  keyboardType="numeric"
                  >
                 
                  </TextInput>
                  </View>
                  {/* <View style={styles.buttonview1}> */}
                  <TouchableHighlight style={styles.button}
                  underlayColor='transparent'>
                     <Text style={styles.buttontext}>Resend OTP</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}
                  underlayColor='transparent'
                  onPress={()=>this.props.navigation.navigate('Student')}>
                     <Text style={styles.buttontext}>NEXT</Text>
                  </TouchableHighlight>
                  
                  <Text style={styles.textotp}> resend after 28 sec</Text>
                

                  <View style={styles.contactview}>
                  <TouchableHighlight style={styles.buttonview}>                 
                  <Icon
                  name="call"
                  size={16}
                  color="green"
                  style={styles.iconstyle}/>
                     
                     
                  </TouchableHighlight>
                  <TouchableHighlight>
                  <Text style={styles.textcontact}>Contact us</Text>
                  </TouchableHighlight>
                  
                 
                  </View>
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
        backgroundColor:'#ffffff',
        
        },
     logo:{
        height:75,
        width:'80%',
        marginTop:20
      
        
     },
     view:{
        height:hp('50%'),
        width:wp('100%'),
        backgroundColor:'#001a33',
        borderRadius:20
     },
     text:{
        fontSize:24,
        fontWeight:'500',
        color:'#000000',
        marginTop:250,
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
        marginLeft:5,
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
      
     },
   
  textotp:{
   marginLeft:120,
   color:'grey',
   fontSize:14,
   marginTop:10
  },
  textnum:{
   fontSize:16,
   color:'#000000',
   marginBottom:10
  },
  textcontact:{
   fontSize:16,
   color:'green',
   marginTop:15,
   fontWeight:'bold',
   marginRight:75
   // justifyContent:'center'
   // alignItems:'center'
  },
  contactview:{
   alignItems:'center',
   flexDirection:'row',
   justifyContent:'center'
  },
  buttonview:{
   width:100,
   height:50,
   
   // backgroundColor:'#000000',
   justifyContent:'center'

  },
  mainview:{
   height:'100%',
   width:'100%'
  },
  buttonview1:{
   alignItems:'center',
   justifyContent:'center'
  },
  iconstyle:{
   marginTop:15,
   // marginLeft:50
   paddingLeft:75
  }
})

