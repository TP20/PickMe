import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginComponent from 'LoginComponent';
import HomepageComponent from 'HomepageComponent'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginComponent}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={HomepageComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;