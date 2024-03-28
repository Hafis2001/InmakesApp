
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';


const BiologyScroll = ({navigate}) => {
 const navigation = useNavigation();
const DATA = [
  {
   id:1,
    title: 'First chapter of biology',
    navigation:{screen:'BiologyScreen'}
  },
  {
    id:2,
    title: 'Second chapter of biology',
    navigation:{screen:''}
  },
  {
    id:3,
    title: 'Third chapter of biology',
    navigation:{screen:''}
  },
  {
    id:4,
    title: 'Fourth chapter of biology',
    navigation:{screen:''}
  },
 
];
const renderItem = ({item}) => (

    <View style={{flex:1}}>
    
    <ScrollView style={styles.ScrollContainer}>

              


      <View style={styles.ScrollChild}> 
     
         <View style={styles.CardView}  >
         <TouchableOpacity 
     onPress={()=>navigation.navigate(item.navigation.screen)}>
             <Text style={styles.ChapterText}>{item.title}</Text>
              <View style={{flexDirection:'row'}}>
            <View style={styles.ChapterNameButton}>
                 <View style={styles.ChapterNameButton1}></View>
                
             </View>
             <Text style={{marginTop:90,marginLeft:5}}>{item.SubText}</Text>
    
             <View style={styles.ChapterNameButton}>
                 <View style={styles.ChapterNameButton1}></View>
                
             </View>
    
             <Text style={{marginTop:90,marginLeft:5}}>3 parts</Text>
            
             </View>
             </TouchableOpacity>  
         </View>
         
      </View> 
    
    
    
     </ScrollView>
        
     </View>  
            
        )


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      
        data={DATA}
        renderItem={renderItem}
       keyExtractor= {(item) => item.id.toString()} />
        
        
        
      
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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

});

export default BiologyScroll;