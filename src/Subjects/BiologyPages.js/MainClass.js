import React, {Component} from "react";
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from "react-native";
import { Divider } from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class MainClass  extends Component{
   render(){
    return(
        <View style={{flex:1}}>
            <View style={{backgroundColor:'#001a33',flex:1}}>


            
           <Image source={require('../BiologyPages.js/ClassImg/BiologyScreen.png')}
           style={{height:'30%',width:'100%'}}></Image>
           <View style={{flexDirection:'row'}}>
           <Text style={styles.ChapterText}>First chapter of biology</Text>
         
         <View style={{marginTop:20,marginLeft:100}}>
           <AntDesign
           name="download"
           size={24}
           color='white'/>
           </View>


           </View>
           <Divider style={styles.divide}/>

           <View style={{flexDirection:'row'}}>

           <View style={{marginTop:20}}>
           <AntDesign
           name="left"
           size={20}
           color='grey'/>
           </View>

           <Text style={{color:'white',marginTop:17,marginLeft:20}}>previous</Text>

           <View style={styles.ChapterButton}>
                            <View style={{height:20,width:20,borderWidth:2,borderColor:'green',borderRadius:50}}></View>
                            </View>
                            <Text style={{marginTop:19,marginLeft:20,color:'green'}}>chapter</Text>

                            <Text style={{color:'white',marginTop:17,marginLeft:70}}>Next</Text>

                            <View style={{marginTop:17,marginLeft:35}}>
           <AntDesign
           name="right"
           size={20}
           color='grey'/>
           </View>

           </View>
           <Divider style={styles.divide}/>


           <View style={styles.BlackBox}>
            <Text style={{color:'white'}}>Your samble question can be shown here 
            no matter how long</Text>
            <View style={{height:40,width:40,borderRadius:50,backgroundColor:'grey'}}>
<Image source={require('./ClassImg/profileicon.jpg')}
style={{height:38,width:38,borderRadius:50}}
></Image>
            </View>

</View>
<View style= {styles.QuestionBox}>
<TextInput 
placeholder="ask question "
placeholderTextColor="#fff">
    

</TextInput>

<TouchableOpacity style={styles.PostButton}>
<Text style={{fontWeight:'900',color:'#001a33'}}>post</Text>
</TouchableOpacity>


</View>
<View style={styles.ChatBox}>
    <FontAwesome
    name="whatsapp"
    size={24}
    color='green'
    />

<Text style={{color:'green',marginLeft:30,}}>Chat with Teacher</Text>

</View>

            
            
           

            </View>
        </View>
    )
   }
}

const styles=StyleSheet.create({
    TopView:{
        height:'30%',
        width:'100%'
    },
    ChapterText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        marginTop:15
    },
    divide:{
        borderWidth:0.2,
        color:'grey',
        borderColor:'grey',
        marginTop:15
    },
    ChapterButton:{
        height:10,
        width:10,
        borderRadius:50,
        backgroundColor:'green',
        marginLeft:70,
         marginTop:25,
        alignItems:'center',
        justifyContent:'center'
    },
    BlackBox:{
        height:'8%',
        width:'80%',
        backgroundColor:'#000',
        borderRadius:5,
        marginLeft:45,
        marginTop:150,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    QuestionBox:{
        backgroundColor:'#19334d',
        height:'8%',
        width:'80%',
        marginTop:10,
        marginLeft:45,
        flexDirection:'row'
    },
    PostButton:{
        height:'55%',
        width:80,
        backgroundColor:'#fff',
        marginLeft:130,
        marginTop:10,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'

    },
    ChatBox:{
        height:'8%',
        width:'80%',
        borderWidth:1,
        borderColor:'green',
        marginTop:15,
        borderRadius:6,
        marginLeft:40,
        // justifyContent:'center',
        padding:20,
        flexDirection:'row',
        alignItems:'center'
       

    }
})