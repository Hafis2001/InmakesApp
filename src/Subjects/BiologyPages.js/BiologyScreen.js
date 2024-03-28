import React, {Component} from "react";
import { Text, View,StyleSheet,TouchableHighlight } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MyTab from "../../TopTab/MyTab";


export default class BiologyScreen  extends Component{
   render(){
    return(
        
            <View style={{flex:1}}>
        <View style={styles.TopView}>
                        
                        <TouchableHighlight style={styles.box}
                            onPress={()=>this.props.navigation.navigate('Biology')}>
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
          <MyTab/>
        </View>
    )
   }
}
const styles=StyleSheet.create({
    TopView:{
        height:'30%',
        width:'100%',
        backgroundColor:'#001a33',
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
})


