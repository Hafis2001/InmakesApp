import { StyleSheet, View, FlatList, Image, Text} from 'react-native'
import React from 'react'





const ContactOnBoard = () => {

  const data=[
    {src:require("../img/profile.png")},
    {src:require("../img/profile.png")},
    {src:require("../img/profile.png")},
  ]
    
  



  const onRenderItem = ({ item }) => {
    return (

      <View >
        
        
        <Image source={item.src} style={{
          width: 260,
          height: 370,
          // borderWidth: 2,
          borderColor: '#d35647',
          resizeMode: 'contain',
          margin: 8,
          marginTop:10,
          backgroundColor:'grey'
        }}>
        </Image>
        

      </View>



    )
  }


  return (
    <View style={{ flex: 1 }}>
      
      <FlatList
        data={data}
        renderItem={onRenderItem}
        horizontal
        />


    </View>
  )
}

export default ContactOnBoard

const styles = StyleSheet.create({})