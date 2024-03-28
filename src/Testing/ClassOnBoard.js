import { StyleSheet, View, FlatList, Image} from 'react-native'
import React from 'react'





const ClassOnBoard = () => {

  const data=[
    {src:require("../img/BIOLOGY.png")},
    {src:require("../img/CHEMISTRY.png")},
    {src:require("../img/MATHS.png")},
  ]
    
  



  const onRenderItem = ({ item }) => {
    return (

      <View>
        
        
        
        <Image source={item.src} style={{
          width: 260,
          height: 170,
          // borderWidth: 2,
          borderColor: '#d35647',
          resizeMode: 'contain',
          margin: 8,
          marginTop:10
        }}></Image>

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

export default ClassOnBoard

const styles = StyleSheet.create({})