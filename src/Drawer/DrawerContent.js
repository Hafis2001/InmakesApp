import React,{Component} from "react";
import { View,StyleSheet,Text,Image, TouchableHighlight } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Divider } from "react-native-paper";







export default class DrawerContent extends Component{
    render(){
        return(
            
            <View style={styles.container}>
                <TouchableHighlight style={styles.box}
                onPress={()=>this.props.navigation.navigate('MyBottomTab')}>
                <AntDesign
                  name="close"
                  size={16}
                  color="grey"
                  
                 />
                 </TouchableHighlight>
                
                <View style={styles.profile}>
                    <View style={styles.profileIcon}>
                        <Image 
                        style={styles.prfileImage}
                        source={require('../img/profileicon.jpg')}></Image>
                    </View>
                    <View style={styles.infoView} >
                    
                        <Text style={styles.name}>Aron Tylor</Text>
                        <Text style={{color:'grey'}}>ID: 1234</Text>
                         
                        {/* <View style={{flexDirection:'row'}}>
                        
                        
                        </View> */}
                       
                        
                        
                        
                        
                        
                        
                    </View>
                    <View >
                        <TouchableHighlight 
                        onPress={()=>this.props.navigation.navigate('Profile')}>
                            <AntDesign
                            name="right"
                            size={26}
                            color="green"
                             style={styles.iconstyle}/>
                        </TouchableHighlight>
                        </View>
                    

                </View>
                
                <View style={{flexDirection:'row',marginTop:10}} >
                <TouchableHighlight style={styles.box}>
                    <View/>
                </TouchableHighlight>
                <Text style={styles.textD}
                onPress={()=>this.props.navigation.navigate('ExamCorner')}>Exam corner</Text>
                
                </View>
                <Divider style={styles.divide}/>

                <View style={{flexDirection:'row'}} >
                <TouchableHighlight style={styles.box}>
                    <View/>
                </TouchableHighlight>
                <Text style={styles.textD}
                onPress={()=>this.props.navigation.navigate('Subscription')}>Subcription</Text>
                
                
                </View>
                <Divider style={{backgroundColor:'grey',width:'80%',marginTop:10,marginLeft:30,borderWidth:0.5}}/>

                <View style={{flexDirection:'row'}} >
                <TouchableHighlight style={styles.box}>
                    <View/>
                </TouchableHighlight>
                <Text style={styles.textD}
                onPress={()=>this.props.navigation.navigate('Analytics')}>Analytics</Text>
                
                </View>
                <Divider style={{backgroundColor:'grey',width:'80%',marginTop:10,marginLeft:30}}/>

                <View style={{flexDirection:'row'}} >
                <TouchableHighlight style={styles.box}>
                    <View/>
                </TouchableHighlight>
                <Text style={styles.textD}
                onPress={()=>this.props.navigation.navigate('Download')}>Download</Text>
                
                </View>
                <Divider style={styles.divide}/>
                

                <View style={{flexDirection:'row'}} >
                <TouchableHighlight style={styles.box}>
                    <View/>
                </TouchableHighlight>
                <Text style={styles.textD}
                onPress={()=>this.props.navigation.navigate('Notification')}>Notification</Text>
                
                </View>
                <Divider style={styles.divide}/>

                <View style={{flexDirection:'row'}} >
                <TouchableHighlight style={styles.box}>
                    <View/>
                </TouchableHighlight>
                <Text style={styles.textD}
                onPress={()=>this.props.navigation.navigate('Referrals')}>Referrals</Text>
                
                </View>
                <Divider style={{backgroundColor:'grey',width:'80%',marginTop:10,marginLeft:30}}/>

                <View style={{flexDirection:'row'}} >
                <TouchableHighlight style={styles.box}>
                    <View/>
                </TouchableHighlight>
                <Text style={styles.textD}
                onPress={()=>this.props.navigation.navigate('ShareApp')}>Share App</Text>
                
                </View>
                <Divider style={styles.divide}/>

                <View style={{flexDirection:'row'}} >
                <TouchableHighlight style={styles.logout}>
                    <View/>
                </TouchableHighlight>
                <Text style={styles.logoutText}
                >Log Out</Text>
                
                </View>
                 <View style={{alignItems:'center',marginTop:50}}>
                <TouchableHighlight style={styles.Enquirebttn}>
                    <Text style={styles.buttnText}>Enquire Now</Text>
                </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'#001a33',
        width:'80%'
    },
    textD:{
        fontSize:18,
        marginTop:10,
        marginLeft:10,
        color:'grey',
        fontStyle:'italic',
        marginLeft:20
    },
    profile:{
        height:"25%",
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
    },
    profileIcon:{
        height:80,
        width:80,
        // backgroundColor:'green',
        borderRadius:50,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'green'
        
    },
    infoView:{
        marginLeft:10,
        marginTop:20
       
    },
    prfileImage:{
        height:73,
        width:73,
        borderRadius:50
    },
    name:{
        fontWeight:'bold',
        color:'#360',
        marginBottom:5
    },
    email:{
        fontWeight:'bold'
    },
    box:{
        height:30,
        width:30,
        borderColor:'green',
        borderWidth:1,
        borderRadius:5,
        marginLeft:10,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    logout:{
        height:30,
        width:30,
        borderColor:'red',
        borderWidth:1,
        borderRadius:5,
        marginLeft:10,
        marginTop:20
    },
    logoutText:{
        fontSize:18,
        marginTop:20,
        marginLeft:10,
        color:'red',
        fontStyle:'italic',
        marginLeft:20
    },
    Enquirebttn:{
        height:40,
        width:'70%',
        borderWidth:1,
        borderColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    buttnText:{
        
        fontSize:16,
        color:'grey'
    },
    iconstyle:{
        marginLeft:90,
        marginTop:10,
    },
        iconcross:{
            alignItems:'center',
            justifyContent:'center'
            
        },
        divide:{
            borderWidth:0.5,
            backgroundColor:'grey',
            width:'80%',
            marginTop:10,
            marginLeft:30
        }
        
        

    
})