import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Home } from '@screens/Home';
import { Phases } from '@screens/Phases';
import theme from '@global/styles/theme';
import React from 'react';


import HomeIcon from '../assets/Home.svg'
import Rating from '../assets/Rating.svg'
import Chat from '../assets/Chat.svg'


import { View } from 'react-native';
import { Forum } from '@screens/Forum';
import { Ranking } from '@screens/Ranking';


export type RoutesType = {
  Home: undefined,
  Phases: undefined,
  TabRoutes: undefined,
}

export type TabRoutesType = {
  Home: undefined,
  Phases: undefined,
  Forum: undefined,
  Ranking: undefined,
}


const Stack = createNativeStackNavigator<RoutesType>();



const Tab = createBottomTabNavigator<TabRoutesType>();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
    initialRouteName='Phases'
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.primary.brand,
      tabBarInactiveTintColor: "#FFF",
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        position: "absolute",
        backgroundColor: "#171F52",
        height: '8%',
        // paddingBottom: 4,
      },
      tabBarLabelStyle: {
        fontSize: 16,
        fontFamily: theme.fonts.text.regular,
        // marginTop: 10
      }
    }}
    >
    <Tab.Screen  
        name='Ranking' 
        component={Ranking}
        options={{
          title: 'Ranking',
          headerShown: false,
          tabBarIcon: ({size, focused}) => (
            <Rating  height={size+20} width={size+20}/>
          ),
        }} 
      />
      <Tab.Screen  
        name='Phases' 
        component={Phases}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({size, focused}) => (
            <View style={{marginBottom: 30, backgroundColor: "#0E1647", borderRadius: 50, padding: 10}}>
              <HomeIcon  height={size+20} width={size+20}/>
            </View>
          ),
        }} 
      />


      <Tab.Screen  
        name='Forum' 
        component={Forum}
        options={{
          title: 'Fórum',
          headerShown: false,
          tabBarIcon: ({size, focused}) => (
            <Chat  height={size+20} width={size+20}/>
          ),
        }} 
      />
    </Tab.Navigator>
  )
};

export const Routes = () => {
  return (
    <NavigationContainer
    
    >
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
        headerShown: false,
    }}
      >
        <Stack.Screen name='Home' component={Home} 
          options={{
            title: 'Home',
             headerShown: false,
          }}
        />
        <Stack.Screen name='TabRoutes' component={TabRoutes} 

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// react-native-svg-transformer