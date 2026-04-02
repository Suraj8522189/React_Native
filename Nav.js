import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sitting from "./Sitting";
import Menu from "./Menu";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Nav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Tab.Screen 
        name="Menu" 
        component={Menu} 
        options={{
          tabBarBadge: 4,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name="Sitting" 
        component={Sitting} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
