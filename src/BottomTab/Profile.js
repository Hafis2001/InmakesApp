import React, { Component } from "react";
import { Text, View,StyleSheet,Image,ScrollView } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Profile1 extends Component{
   render(){
    return(
        
        <View style={{flex:1,backgroundColor:'grey'}}>
          
     <View>
    

            <View style={styles.TopView}>
                <View style={{alignItems:'center'}}>
          <Text style={styles.ProfileText}>Profile</Text>
          </View>
    <View style={{marginLeft:150}}>
          <Icon
          name="notifications-none"
          size={24}
          color="white"
          />
</View>
            </View>
            
            </View>

<View style={{ flex: 1 }}>
        
        
          
       
            <View style={styles.ProfileView}>

                <View style={styles.ProfileImageView}>
                    <View style={styles.profileIcon}>

                        <Image 
                        style={styles.ProfileIconStyle}
                        source={require('../img/profileicon.jpg')}>

                        </Image>
                        
                    </View>
                    
                    <View style={styles.infoView}>

                        <Text style={{fontSize:18,fontWeight:'bold',color:'#000'}}>aaron tylor</Text>
                        <Text>id 12345678</Text>
                    </View>
                    
                </View>
                <Text style={{fontSize:18,color:'#000'}}>personal info</Text>
                <Divider style={styles.divide}/>

                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:15,marginTop:10}}>Account setting</Text>
                <Text style={{marginTop:10,fontSize:17,color:"#000",marginLeft:40}}>aaron tylor</Text>
                
                </View>
                <Divider style={styles.divide}></Divider>

                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:15,marginTop:10}}>E-mail</Text>
                <Text style={{marginTop:10,fontSize:17,color:"#000",marginLeft:100}}>aarontylor12@gmail.com</Text>
                
                </View>
                <Divider style={styles.divide}></Divider>

                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:15,marginTop:10}}>Number</Text>
                <Text style={{marginTop:10,fontSize:17,color:"#000",marginLeft:90}}>123456789</Text>
                
                </View>
                <Divider style={styles.divide}></Divider>

                <Text style={{fontSize:18,color:'#000',marginTop:20}}>Course info</Text>
                <Divider style={styles.divide}></Divider>

                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:15,marginTop:10}}>Center</Text>
                <Text style={{marginTop:10,fontSize:17,color:"#000",marginLeft:100}}>InmakesEdu</Text>
                
                </View>
                <Divider style={styles.divide}></Divider>

                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:15,marginTop:10}}>Course</Text>
                <Text style={{marginTop:10,fontSize:17,color:"#000",marginLeft:100}}>Plus Two</Text>
                
                </View>
                <Divider style={styles.divide}></Divider>

                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:15,marginTop:10}}>Payment Status</Text>
                <Text style={{marginTop:10,fontSize:17,color:"#000",marginLeft:40}}>Free</Text>
                
                </View>
                <Divider style={styles.divide}></Divider>

                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:15,marginTop:10}}>Expiry date</Text>
                <Text style={{marginTop:10,fontSize:17,color:"#000",marginLeft:70}}>Not Applicable</Text>
                
                </View>
                <Divider style={styles.divide}></Divider>
</View>
     <View style={styles.paymaentBotton}>
        <View style={{marginTop:25}}>
      <AntDesign
      name="wallet"
      size={28}
      color="#ffffff"
      />
      </View>
      <Text style={{marginTop:25,marginLeft:50,fontSize:20,fontWeight:'bold',color:'#fff'}}>custom payment</Text>
<View style={{marginTop:25,marginLeft:90}}>
      <AntDesign
      name="right"
      size={24}
      color="#ffffff"
      />
</View>

     </View>

    
      </View>
     

        </View>
        
    )
   } 
}

const styles=StyleSheet.create({
    TopView:{
        height:'40%',
        width:'100%',
        backgroundColor:'#001a33',
        flexDirection:'row',
        
    },
    ProfileText:{
        color:'#ffffff',
        fontSize:18,
        marginLeft:120
        
    },
    ProfileView:{
        height:580,
        width:'90%',
        backgroundColor:'#ffffff',
        padding:20,
        margin:-260,
        marginLeft:25,
        marginBottom:5,
        borderRadius:10
    },
    ProfileImageView:{
        height:'25%',
        width:'100%',
        flexDirection:'row'
    },
    profileIcon:{
        height:80,
        width:80,
        // backgroundColor:'green',
        borderRadius:50,
        borderWidth:1.5,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'green',
       
        
    },
    ProfileIconStyle:{
        height:77,
        width:77,
        borderRadius:50
    },
    infoView:{
        marginLeft:10,
        marginTop:20
    },
    divide:{
        borderWidth:0.1,
        backgroundColor:'grey',
        width:'100%',
        marginTop:10,
        
    },
    paymaentBotton:{
        width:'90%',
        height:'10%',
        backgroundColor:'#5cd65c',
        marginLeft:25,
        
        flexDirection:'row'
        
    }
})