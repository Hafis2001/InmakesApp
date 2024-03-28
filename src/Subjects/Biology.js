import React, { Component } from "react";
import { Text, View,StyleSheet,TouchableHighlight,ScrollView,SafeAreaView,StatusBar,FlatList } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import BiologyScroll from "./BiologyScroll";






const Biology = ({navigation}) => {


    return (
        

        <View style={{flex:1}}>
        <View style={styles.TopView}>
                        
                        <TouchableHighlight style={styles.box}
                            onPress={()=>navigation.navigate('MyBottomTab')}>
                            <AntDesign
                              name="left"
                              size={16}
                              color="green"
                              
                             />
            
            </TouchableHighlight>
            
            
                         <Text style={styles.SubText}
                         >Biology</Text>
                         
                           <View style={{flexDirection:'row'}}>
                         
                         {/* chapter */}
                         <View style={styles.ChapterButton}>
                            <View style={{height:20,width:20,borderWidth:2,borderColor:'green',borderRadius:50}}></View>
                            </View>
                            <View style={{marginTop:55}} >
                            <Text style={styles.ChapterText1}>chapters</Text>
                            </View>
            
                            {/* hours */}
                            <View style={styles.ChapterButton}>
                            <View style={{height:20,width:20,borderWidth:2,borderColor:'green',borderRadius:50}}></View>
                            </View>
                            <View style={{marginTop:55}}>
                            <Text style={styles.ChapterText1}>124 Hours</Text>
                            </View>
            
                         </View>
                        
        
          </View>
          
          <BiologyScroll/>

        </View>
    )
   } 


const styles=StyleSheet.create({
    Container:{
        flex:1,
    
        backgroundColor:'#eeeeee'
        
    },
    TopView:{
        height:'35%',
        backgroundColor:'#001a33',
        width:'100%'
    },
    box:{
        height:30,
        width:30,
        borderColor:'grey',
        borderWidth:1,
        borderRadius:5,
        marginLeft:10,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
SubText:{
    color:'#ffffff',
    fontSize:24,
    marginLeft:40,
    marginTop:50,
    fontWeight:'bold'
},
ChapterButton:{
    height:10,
    width:10,
    borderRadius:50,
    backgroundColor:'green',
    marginLeft:30,
    marginTop:60,
    alignItems:'center',
    justifyContent:'center'
},
ChapterText1:{
    color:'green',
    marginLeft:10,
    margintop:30,
    
},
ScrollContainer:{
    height:'100%',
    width:'100%',
   
},
ScrollChild:{
    width:'100%',
    
    alignItems:'center',
    justifyContent:'center',
   
},
CardView:{
    width:'95%',
    height:200,
    backgroundColor:'#ffffff',
    
    elevation:10,
    marginTop:10
    

},
ChapterText:{
    fontSize:24,
    fontWeight:'bold',
    color:'#000000'
},
ChapterNameButton:{
    height:20,
    width:20,
    borderWidth:2,
    borderColor:'grey',
    borderRadius:50,
    marginTop:90,
    marginLeft:20,
    alignItems:'center',
    justifyContent:'center'
},
ChapterNameButton1:{
    height:13,
    width:13,
    borderRadius:50,
    backgroundColor:'grey',
    
},
container: {
    flex: 1,
    
},

});
export default Biology;