import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { Phases } from '@screens/Phases';

export type RoutesType = {
  Home: undefined,
  Phases: undefined,
}
const Stack = createNativeStackNavigator<RoutesType>();

export const Routes= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Phases'
      >
        <Stack.Screen name='Home' component={Home} 
          options={{
            title: 'Home',
             headerShown: false,
          }}
        />
        <Stack.Screen name='Phases' component={Phases} 
          options={{
            title: 'Phases',
             headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// react-native-svg-transformer