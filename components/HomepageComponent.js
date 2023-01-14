import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Dimensions,
    Button
  } from 'react-native';

  import { Card } from 'react-native-elements'

function HomepageComponent() {

    return (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor:'white'}}>
        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
         
            <View style={{height: 150,  width:"49.5%", padding:10, marginBottom:1, 

shadowOffset: { width: 0, height: 0},
shadowRadius: 6,
shadowOpacity: 0.2,
elevation: 5,shadowColor:'gray', backgroundColor:'blue'}}>

                </View>
                <View style={{height: 150,  width:"49.5%", padding:10, marginBottom:1, 

shadowOffset: { width: '-50', height: 2 },
shadowRadius: 6,
shadowOpacity: 0.2,
elevation: 5,shadowColor:'gray', backgroundColor:'red'}}>

                </View>
                <View style={{height: 150,  width:"49.5%", padding:10, marginBottom:1, 

shadowOffset: { width: 0, height: 0},
shadowRadius: 6,
shadowOpacity: 0.2,
elevation: 5,shadowColor:'gray', backgroundColor:'red'}}>

                </View>
                <View style={{height: 150,  width:"49.5%", padding:10, marginBottom:1, 

shadowOffset: { width: '-50', height: 2 },
shadowRadius: 6,
shadowOpacity: 0.2,
elevation: 5,shadowColor:'gray', backgroundColor:'blue'}}>

                </View>
                <View style={{height: 150,  width:"49.5%", padding:10, marginBottom:1, 

shadowOffset: { width: 0, height: 0},
shadowRadius: 6,
shadowOpacity: 0.2,
elevation: 5,shadowColor:'gray', backgroundColor:'blue'}}>

                </View>
                <View style={{height: 150,  width:"49.5%", padding:10, marginBottom:1, 

shadowOffset: { width: '-50', height: 2 },
shadowRadius: 6,
shadowOpacity: 0.2,
elevation: 5,shadowColor:'gray', backgroundColor:'red'}}>

                </View>
                <View style={{height: 150,  width:"49.5%", padding:10, marginBottom:1, 

shadowOffset: { width: 0, height: 0},
shadowRadius: 6,
shadowOpacity: 0.2,
elevation: 5,shadowColor:'gray', backgroundColor:'red'}}>

                </View>
                <View style={{height: 150,  width:"49.5%", padding:10, marginBottom:1, 

shadowOffset: { width: '-50', height: 2 },
shadowRadius: 6,
shadowOpacity: 0.2,
elevation: 5,shadowColor:'gray', backgroundColor:'blue'}}>

                </View>
                <View style={{height: 150,  width:"49.5%", padding:10, marginBottom:1, 

shadowOffset: { width: 0, height: 0},
shadowRadius: 6,
shadowOpacity: 0.2,
elevation: 5,shadowColor:'gray', backgroundColor:'blue'}}>

                </View>
                <View style={{height: "25%",  width:"49.5%", padding:10, marginBottom:1, 

shadowOffset: { width: '-50', height: 2 },
shadowRadius: 6,
shadowOpacity: 0.2,
elevation: 5,shadowColor:'gray', backgroundColor:'red'}}>

                </View>
        </View>

        </ScrollView>

    )
}

export default HomepageComponent;