import React, { Component } from "react";
import { StyleSheet, View,ImageBackground, Image, TouchableHighlight, Text,TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeDrop from "./Testing/HomeDrop";
import Subject from "./Testing/Subjects";
import ClassOnBoard from "./Testing/ClassOnBoard";
import ContactOnBoard from "./Testing/ContactOnBoard";





const Home1 = () => { 
    const navigation = useNavigation();
   
        
        return(
            
            <ScrollView>
                
            <View style={{flex:1}}> 
             
            
                <View style={styles.headerView}>
                    <TouchableHighlight style={styles.btn1} onPress={() => navigation.navigate('Test')} >
                        <Image source={require('./img/BoxGreen.png')}
                        style={{height:20,width:20}}></Image>
                    </TouchableHighlight>
                    <Image source={require('./img/logo.png')}
                    style={styles.logoheader}/>
                    <TouchableOpacity style={styles.btn2}>
                            <View style={{flexDirection:'row'}}>
                        <Image source={require('./img/roundog.png')}
                        style={{height:"100%",width:"25%"}}></Image>
                        <Text style={{fontSize:16,color:'green',marginLeft:10,fontWeight:'bold'}}>Classes</Text>
                       
                        </View>

                        
                    </TouchableOpacity>

                   



                </View>
                <View>
                    <Text style={{fontSize:16,color:'#000',marginTop:50,marginLeft:10}}>Goodmorng</Text>
                    <Text style={{marginTop:20,fontSize:24,fontWeight:'bold',color:'#000000',marginLeft:20}}>Aaron Tylor</Text>
                    
                   </View>
                   <View style={{marginTop:50,padding:10}}>
                    <HomeDrop/>
                   </View>


             
             <Subject/>

             <Text style={{color:'#000000',fontSize:18}}>Recent classes</Text>

             <ClassOnBoard/>

             <ContactOnBoard/>
             
             
            </View>
            
            </ScrollView>
        )
    }


const styles=StyleSheet.create({

    headerView:{

        flexDirection:'row'
    },
    logoheader:{

        height:'75%',
        width:"40%",
        marginTop:10,
        marginLeft:20

    },
    btn1:{

        height:35,
        width:35,
        borderColor:'green',
        borderWidth:1,
        padding:4,
        marginTop:20,
        marginLeft:20,alignItems:'center',
        borderColor:'green',
        borderRadius:5
    },
    btn2:{

        height:40,
        width:100,
        marginTop:20,
        borderWidth:0.5,
        justifyContent:'center',
        marginLeft:'10%',
        borderColor:'green',
        borderRadius:5
    }

})

export default Home1;