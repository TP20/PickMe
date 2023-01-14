/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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

import { WebView } from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const LoginComponent = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
  
  
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor:'white'}}>
            
        <View style={{height:Dimensions.get('window').height, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
         
         <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={{width:100, height:100, borderColor:'black', borderWidth:2, borderRadius:50, marginBottom:20}} />
  
          </View>
         
          <TextInput style={{height: 70, width:'85%', padding:10, borderColor: 'black',borderWidth: 2, marginVertical:"2%", backgroundColor:'white', color:'black', border:'black' }}
          placeholder="Username"
          />
  
          <TextInput style={{height: 70, width:'85%', padding:10, borderColor: 'black',borderWidth: 2, marginVertical:"2%", backgroundColor:'white', color:'black', border:'black' }}
          placeholder="Password"
          />
  <View style={{justifyContent:'center'}}>
          <View style={{flexDirection:'row',justifyContent:"space-between", width:'85%'}}>
          <View style={{ width: "47%", height: 40, marginHorizontal:8 }}>
      <Button title="Login" style={{color:'white'}} onPress={() =>
        navigation.navigate('Pick a Sport')
      } color="tomato"  />
  </View>
  
  <View style={{ width: "47%", height: 40, marginHorizontal:8 }}>
      <Button title="Register" style={{color:'white'}} color="tomato" />
  </View>
  
            </View>
            </View>
  
  
        </View>
  
      
  
        
  
     
  
        {/*<Header /> */}
      {/*    <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
          <Section title="Step One">
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits. Test
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks /> 
          </View> */}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
  export default LoginComponent;