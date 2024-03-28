import React from "react";
import { SafeAreaView,StyleSheet,Dimensions, StatusBar, FlatList,View, Image,Text, TouchableOpacity} from "react-native";
 
const {width,height}=Dimensions.get('window');
const COLORS={primary:'#ffffff',white:'#fff'};

const slides=[
    {
        id:'1',
        image:require('../img/onboard1.png'),
        title:'best online education',
        subtitle:'Here is the best education app ever seen',

    },
    {
        id:'2',
        image:require('../img/onboard2.png'),
        title:'best online education',
        subtitle:'Here is the best education app ever seen',

    },
    {
        id:'3',
        image:require('../img/onboard3.png'),
        title:'best online education',
        subtitle:'Here is the best education app ever seen',

    },
];

const Slide=({item})=>{

    return <View style={{alignItems:'center'}}>
      <Image source={item.image} style={{height:'75%',width,resizeMode:'contain'}}/>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  
};


const Onboard=({navigation})=>{

    const [currentSlideIndex,SetCurrentSlideIndex]=React.useState(0);
    const ref =React.useRef(null);

    const Footer=()=>{
      return (
      <View style={{height:height*0.25,
        justifyContent:"space-between",
        paddingHorizontal:20,
    }}> 
    <View style={{flexDirection:'row',
    justifyContent:'center',
    marginTop:20}}>
        {slides.map((_,index)=>(
        <View key={index} style={[styles.indicator,currentSlideIndex==index &&{
          backgroundColor:'green',
          width:25,  
        }]}/>
        ))}
    </View>
    <View style={{marginBottom:20}}>
        {
            currentSlideIndex== slides.length-1 ?  <View style={{height:50}}>
            <TouchableOpacity style={styles.btn}
             onPress={()=>navigation.navigate('MyBottomTab')} >
                    <Text style={{fontWeight:'bold',fontSize:15}}>Get start</Text>
                </TouchableOpacity>
            </View>:
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={skip}
            style={[styles.btn,{backgroundColor:'transperant',borderWidth:2,borderColor:"green"}]}>
                <Text style={{fontWeight:'bold',fontSize:15,color:'green'}}>SKIP</Text>
            </TouchableOpacity>
            <View style={{width:15}}></View>
            <TouchableOpacity style={[styles.btn]} onPress={goNextslide}>
                <Text style={{fontWeight:'bold',fontSize:15}}>NEXT</Text>
            </TouchableOpacity>
        </View>
        }
       
        
         </View>
    </View>
      );
    };
    const updateCurrentSlideIndex= e =>{
    
        const contentOffsetx= e.nativeEvent.contentOffset.x;
      const currentIndex=Math.round(contentOffsetx/width)
      SetCurrentSlideIndex(currentIndex)
      };
      const goNextslide=()=>{
        const nextSlideIndex=currentSlideIndex +1;
        if(nextSlideIndex !=slides.length){
            const offset=nextSlideIndex*width;
        ref?.current?.scrollToOffset({offset});
        SetCurrentSlideIndex(nextSlideIndex);

        }
        
      };
      const skip=()=>{
        const lastSlideIndex=slides.length - 1;
        const offset=lastSlideIndex*width;
        ref?.current?.scrollToOffset({offset});
        SetCurrentSlideIndex(lastSlideIndex);

        

        
      };
    return (
    <SafeAreaView
    style={{flex:1,backgroundColor:COLORS.primary}}>
        <StatusBar backgroundColor={COLORS.primary}/>
        <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex} 
        pagingEnabled
        data={slides} contentContainerStyle={{height:height*0.75}}
        horizontal
        showsHorizontalScrollIndicator={false} 
        renderItem={({item})=> <Slide item={item}/>}
        />
        <Footer/>
    </SafeAreaView>
    );
};
 const styles=StyleSheet.create({
    title:{
        color:"#000000",
        fontSize:22,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'center'

    },
    subtitle:{
        color:'#000000',
        fontSize:13,
        marginTop:10,
        maxWidth:"70%",
        textAlign:'center',
        lineHeight:23    
    },
    indicator:{
        height:2.5,
        width:10,
        backgroundColor:'grey',
        marginHorizontal:3,
        borderRadius:2,
    },
    btn:{
        flex:1,
        height:50,
       borderRadius:5,
       backgroundColor:'green',
       justifyContent:'center',
       alignItems:'center'
    }
 });
 export default Onboard;