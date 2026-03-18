import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./Signup";
import Login from "./login";



const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

    <Stack.Screen name="Signup" component={Signup}/>
     <Stack.Screen name="Login" component={Login}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}