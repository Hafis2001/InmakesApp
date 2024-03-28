
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Subject = () => {
  const navigation = useNavigation();
const DATA = [
  {
   id:1,
    title: 'Biology',
    navigation:{screen:'Biology'}
  },
  {
    id:2,
    title: 'Chemistry',
    navigation:{screen:'Chemistry'}
  },
  {
    id:3,
    title: 'Maths',
    navigation:{screen:'Maths'}
  },
  {
    id:4,
    title: 'Physics',
    navigation:{screen:'Physics'}
  },
  {
    id:5,
    title: 'English',
    navigation:{screen:'English'}
  },
];
const renderItem = ({item}) => (
  <View style={styles.item}>
   
    <TouchableOpacity style={{borderWidth:1,height:40,width:120,borderRadius:5,flexDirection:'row',alignItems:'center'}}
    onPress={()=>navigation.navigate(item.navigation.screen)}>
        <Image source={require('../img/roundog.png')}
        style={{height:30,width:30}}></Image>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      
     {/* <Text style={styles.title}>{title}</Text>  */}
  </View>
);


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      horizontal
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
  item: {
    backgroundColor: '#ffffff',
    padding: 4,
    // marginVertical: 8,
    marginHorizontal: 5,
    height:'9%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    
    

  },
  title: {
    fontSize: 18,
    color:'#000000'
    
  },
});

export default Subject;